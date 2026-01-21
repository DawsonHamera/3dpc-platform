import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class WorkstationLoginDto {
  @IsNotEmpty({ message: 'Passkey is required' })
  @IsString()
  @MinLength(1, { message: 'Passkey cannot be empty' })
  passkey: string;
}
