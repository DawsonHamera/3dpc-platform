import { Body, Controller, Post } from '@nestjs/common';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import type { JwtUser } from '../../common/types/jwt-user.type';
import { CreateErrorReportDto } from './dto/create-error-report.dto';
import { ErrorReportsService } from './error-reports.service';

@Controller('error-reports')
export class ErrorReportsController {
  constructor(private readonly errorReportsService: ErrorReportsService) {}

  @Post()
  @Roles(['member', 'admin'])
  create(
    @CurrentUser() user: JwtUser,
    @Body() createErrorReportDto: CreateErrorReportDto,
  ) {
    return this.errorReportsService.create(+user.id, createErrorReportDto);
  }
}
