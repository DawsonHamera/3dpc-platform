import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { EventsService } from './events.service';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @Public()
  findAll(
    @Query('filter') filter?: string,
    @Query('sort') sort?: string,
    @Query('limit') limit?: number,
  ) {
    return this.eventsService.findAll(filter, sort, limit);
  }

  @Get('current')
  @Public()
  findCurrent() {
    return this.eventsService.findCurrent();
  }

  @Get(':id')
  @Roles(['admin', 'member'])
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Get(':id/code')
  @Roles(['admin'])
  findEventCode(@Param('id') id: string) {
    return this.eventsService.findEventCode(+id);
  }

  @Post()
  @Roles(['admin'])
  create(@Body() createEventDto: any, @CurrentUser() user) {
    return this.eventsService.create(createEventDto, user.id);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() updateEventDto: any) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }

  @Post(':id/attendance/')
  @Roles(['admin', 'member'])
  attendEvent(
    @Param('id') id: string,
    @CurrentUser() user,
    @Query('code') code?: string,
    @Query('status') status?: string,
  ) {
    return this.eventsService.attendEvent(+id, user.id, code, status);
  }

  @Get(':eventId/attendance/')
  @Roles(['admin', 'member'])
  getUserAttendance(@Param('eventId') eventId: string, @CurrentUser() user) {
    return this.eventsService.findAttendance(+eventId, user.id);
  }
}
