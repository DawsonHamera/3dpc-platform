import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    login(loginDto: LoginDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    loginWorkstation(loginDto: LoginDto): Promise<void>;
}
