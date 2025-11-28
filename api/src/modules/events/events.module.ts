import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [],
  controllers: [EventsController],
  providers: [EventsService, UsersService],
  exports: [EventsService],
})
export class EventsModule {}
