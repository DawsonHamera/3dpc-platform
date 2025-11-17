import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || 'jrewn423432bvklgrer23faefew',
  expiresIn: '30d',
}));
