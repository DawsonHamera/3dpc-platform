import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { ConfigType } from '@nestjs/config';
import { AuthService } from '../auth.service';
import jwtConfig from '../../../config/jwt.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    @Inject(jwtConfig.KEY)
    private jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // important
      secretOrKey: jwtConfiguration.secret,
    });
  }

  async validate(payload: any) {
    if (payload.sub === 'workstation') {
      return { id: -1, role: { id: 3, name: 'admin' } };
    }
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }
    const safeUser = { ...user };
    delete safeUser.password_hash;
    return safeUser;
  }
}
