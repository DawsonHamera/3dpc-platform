import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TasksHooks } from './tasks.hooks';

@Module({
  imports: [PrismaModule],
  providers: [TasksService, TasksHooks],
  controllers: [TasksController],
})
export class TasksModule {}
