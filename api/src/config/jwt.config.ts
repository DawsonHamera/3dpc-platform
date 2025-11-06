import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || 'jrewn423432bvklgrer23faefew',
  expiresIn: process.env.JWT_EXPIRES_IN || '7d',
}));
