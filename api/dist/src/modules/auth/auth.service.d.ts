import { JwtService } from '@nestjs/jwt';
import type { ConfigType } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import appConfig from '../../config/app.config';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    private jwtService;
    private appConfiguration;
    private streamClient;
    constructor(prisma: PrismaService, jwtService: JwtService, appConfiguration: ConfigType<typeof appConfig>);
    register(registerDto: RegisterDto): Promise<{
        name: string;
        email: string;
        password_hash: string;
        grade: import("@prisma/client").$Enums.grade;
        points: number;
        last_active: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        id: number;
        role_id: number;
    }>;
    login(loginDto: LoginDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    loginWorkstation(passkey: LoginDto): Promise<void>;
    private createStreamToken;
    validateUser(payload: any): Promise<any>;
}
