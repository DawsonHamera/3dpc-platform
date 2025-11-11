import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { TokenExpiredError } from 'jsonwebtoken';

@Catch(UnauthorizedException)
export class JwtExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    // Check if this was a token expired error
    if ((exception as any).cause instanceof TokenExpiredError) {
      response.status(status).json({ message: 'token expired' });
    } else {
      response.status(status).json({ message: exception.message });
    }
  }
}
