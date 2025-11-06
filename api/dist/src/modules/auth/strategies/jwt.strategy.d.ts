import type { ConfigType } from '@nestjs/config';
import { AuthService } from '../auth.service';
import jwtConfig from '../../../config/jwt.config';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    private jwtConfiguration;
    constructor(authService: AuthService, jwtConfiguration: ConfigType<typeof jwtConfig>);
    validate(payload: any): Promise<any>;
}
export {};
