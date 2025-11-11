import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import type { ConfigType } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import appConfig from '../../config/app.config';
import { StreamChat } from 'stream-chat';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { success } from 'src/utils/response';

@Injectable()
export class AuthService {
  private streamClient: StreamChat;

  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    @Inject(appConfig.KEY)
    private appConfiguration: ConfigType<typeof appConfig>,
  ) {
    // Initialize StreamChat client with API key and secret from env
    // this.streamClient = StreamChat.getInstance(
    //   process.env.STREAM_API_KEY!,
    //   process.env.STREAM_API_SECRET!,
    // );
  }

  async register(registerDto: RegisterDto) {
    const { name, email, password, grade_id } = registerDto;

    // Check if user already exists
    const existingUser = await this.prisma.users.findUnique({
      where: { email },
    });

    // If user exists and is not deleted, throw conflict error
    if (existingUser && !existingUser.deleted_at) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      this.appConfiguration.bcryptRounds,
    );

    // Create user data
    const userData: Prisma.usersCreateInput = {
      name,
      email,
      password_hash: hashedPassword,
      grade: { connect: { id: grade_id ?? 1 } },
    };

    // Create new user
    const user = await this.prisma.users.create({ data: userData });
    // Create Stream user (new case)
    // await this.streamClient.upsertUser({
    //   id: newUser.id.toString(),
    //   name: newUser.name,
    // });

    return user;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user
    const user = await this.prisma.users.findUnique({
      where: { email },
      include: { role: true },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Update last active
    await this.prisma.users.update({
      where: { id: user.id },
      data: { last_active: new Date() },
    });

    // Generate tokens
    const payload = { sub: user.id, email: user.email, roleId: user.role_id };
    const accessToken = this.jwtService.sign(payload);
    // const streamToken = this.createStreamToken(user.id.toString());

    const decoded: any = this.jwtService.decode(accessToken);
    const expires_at =
      decoded && decoded.exp
        ? new Date(decoded.exp * 1000).toISOString()
        : null;
    return success(
      {
        access_token: accessToken,
        stream_token: null,
        expires_at: expires_at,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          grade_id: user.grade_id,
          role: user.role,
        },
      },
      'Login successful',
    );
  }

  private createStreamToken(userId: string): string {
    // Generate a Stream Chat token for the given userId
    return this.streamClient.createToken(userId);
  }

  async validateUser(payload: any): Promise<any> {
    const user = await this.prisma.users.findUnique({
      where: { id: payload.sub },
      include: { role: true },
    });
    if (user) {
      // Remove sensitive field by mutating the user object
      delete (user as any).password_hash;
      const result = user;

      return result;
    }
    return null;
  }
}
