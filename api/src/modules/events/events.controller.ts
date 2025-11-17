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
  findAll() {
    return this.eventsService.findAll();
  }

  @Get('current')
  @Public()
  findCurrent() {
    return this.eventsService.findCurrent();
  }

  @Get(':id')
  @Roles(['admin'])
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
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

  @Post(':id/attendance')
  @Roles(['admin', 'member'])
  attendEvent(
    @Param('id') id: string,
    @CurrentUser() user,
    @Query('code') code?: string,
  ) {
    return this.eventsService.attendEvent(+id, user.id, code);
  }
}
