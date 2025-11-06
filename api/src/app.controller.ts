import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './common/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHealth() {
    return {
      message: '3D Printing Club API',
      version: '1.0.0',
      status: 'OK',
      timestamp: new Date().toISOString(),
    };
  }
}
