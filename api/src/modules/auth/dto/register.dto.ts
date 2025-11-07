import { IsEmail, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsNumber()
  grade_id?: number;
}
