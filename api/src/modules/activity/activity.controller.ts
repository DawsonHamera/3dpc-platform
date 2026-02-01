import { Controller, Get, Param, Query } from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  @Roles(['admin'])
  findAll(@Query('limit') limit?: string, @Query('filter') filter?: string) {
    return this.activityService.findAll(limit ? +limit : undefined, filter);
  }
  @Get('/user/:id')
  @Roles(['admin'])
  findByUserId(@Param('id') id: string) {
    return this.activityService.findByUserId(+id);
  }
}
