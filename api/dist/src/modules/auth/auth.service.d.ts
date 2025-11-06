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
        status: number;
        error: null;
        messages: {
            success: string;
        };
    }>;
    login(loginDto: LoginDto): Promise<{
        status: number;
        error: null;
        messages: {
            success: string;
        };
        data: {
            access_token: string;
            stream_token: string;
            user: {
                id: number;
                name: string;
                email: string;
                grade_id: number | null;
                role: {
                    id: number;
                    name: string;
                    created_at: Date | null;
                    updated_at: Date | null;
                    description: string | null;
                };
            };
        };
    }>;
    private createStreamToken;
    validateUser(payload: any): Promise<any>;
}
