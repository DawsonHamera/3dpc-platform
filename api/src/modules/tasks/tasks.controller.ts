import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @Roles(['admin'])
  findAll() {
    return this.tasksService.findAllTasks();
  }

  @Get('user')
  @Roles(['member', 'admin'])
  findByUser(@CurrentUser() user: any) {
    return this.tasksService.findTasksByUserId(+user.id);
  }

  @Get('/open')
  @Public()
  findOpen() {
    return this.tasksService.findOpenTasks();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.tasksService.findTaskById(+id);
  }

  @Get('/users')
  @Roles(['admin'])
  findAllByUsers() {
    return this.tasksService.findAllByUsers();
  }

  @Post()
  @Roles(['admin'])
  create(@Body() data: any) {
    return this.tasksService.createTask(data);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() data: any) {
    return this.tasksService.updateTask(+id, data);
  }

  @Patch(':id/status')
  @Roles(['admin', 'member'])
  updateStatus(@Param('id') id: string, @Body() data: any) {
    return this.tasksService.updateTask(+id, { status: data.status });
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.tasksService.deleteTask(+id);
  }
  @Patch(':id/claim')
  @Roles(['admin', 'member'])
  claim(@Param('id') id: string, @CurrentUser() user: any) {
    return this.tasksService.claimTask(+id, +user.id);
  }

  @Patch(':id/release')
  @Roles(['admin', 'member'])
  release(@Param('id') id: string, @CurrentUser() user: any) {
    return this.tasksService.releaseTask(+id, user);
  }
}
