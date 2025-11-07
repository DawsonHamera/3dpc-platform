import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
            stream_token: null;
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
}
