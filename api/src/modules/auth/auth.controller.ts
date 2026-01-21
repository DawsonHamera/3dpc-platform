import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { success } from 'src/utils/response';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { WorkstationLoginDto } from './dto/workstation-login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(registerDto);
    if (!user) throw new Error('Registration failed');
    return success(user, 'User registered successfully');
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Public()
  @Post('login/workstation')
  @HttpCode(HttpStatus.OK)
  loginWorkstation(@Body() workstationLoginDto: WorkstationLoginDto) {
    return this.authService.loginWorkstation(workstationLoginDto.passkey);
  }
}
