import { error_report_type } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateErrorReportDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(error_report_type)
  type: error_report_type;
}
