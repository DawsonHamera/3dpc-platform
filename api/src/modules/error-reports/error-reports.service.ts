import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateErrorReportDto } from './dto/create-error-report.dto';

@Injectable()
export class ErrorReportsService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: number, data: CreateErrorReportDto) {
    return this.prisma.error_report.create({
      data: {
        user_id: userId,
        description: data.description,
        type: data.type,
      },
    });
  }
}
