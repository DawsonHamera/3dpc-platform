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
    this.streamClient = StreamChat.getInstance(
      process.env.STREAM_API_KEY!,
      process.env.STREAM_API_SECRET,
    );
  }

  async register(registerDto: RegisterDto) {
    const { name, email, password, grade } = registerDto;

    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
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
    const userData: Prisma.userCreateInput = {
      name,
      email,
      password_hash: hashedPassword,
      grade: grade,
    };

    // Create new user
    const user = await this.prisma.user.create({ data: userData });
    // Create Stream user (new case)
    await this.streamClient.upsertUser({
      id: user.id.toString(),
      name: user.name,
    });

    return user;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        grade: true,
        password_hash: true,
        role: true,
        role_id: true,
      },
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
    await this.prisma.user.update({
      where: { id: user.id },
      data: { last_active: new Date() },
    });

    // Generate tokens
    const payload = {
      sub: user.id,
      email: user.email,
      roleId: user.role_id,
    };
    console.log(new Date().toISOString());
    const accessToken = this.jwtService.sign(payload);
    const streamToken = this.createStreamToken(user.id.toString());

    const decoded: any = this.jwtService.decode(accessToken);
    const expires_at =
      decoded && decoded.exp
        ? new Date(decoded.exp * 1000).toISOString()
        : null;
    return success(
      {
        access_token: accessToken,
        stream_token: streamToken,
        expires_at: expires_at,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          grade: user.grade,
          role: user.role,
        },
      },
      'Login successful',
    );
  }

  async loginWorkstation(passkey: LoginDto) {
    if (passkey.password !== process.env.WORKSTATION_PASSKEY) {
      throw new UnauthorizedException('Invalid workstation passkey');
    }
    return 
  }

  private createStreamToken(userId: string): string {
    // Generate a Stream Chat token for the given userId
    return this.streamClient.createToken(userId);
  }

  async validateUser(payload: any): Promise<any> {
    const user = await this.prisma.user.findUnique({
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
