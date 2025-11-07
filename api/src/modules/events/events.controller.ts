import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @Public()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get('current')
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
  create(@Body() createEventDto: any) {
    return this.eventsService.create(createEventDto);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() updateEventDto: any) {
    return this.eventsService.update(+id, updateEventDto);
  }
}
