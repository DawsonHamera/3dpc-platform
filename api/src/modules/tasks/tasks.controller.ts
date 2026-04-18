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
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import type { JwtUser } from '../../common/types/jwt-user.type';

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
  findByUser(@CurrentUser() user: JwtUser) {
    return this.tasksService.findTasksByUserId(+user.id);
  }

  @Get('/open')
  @Roles(['member', 'admin'])
  findOpen() {
    return this.tasksService.findOpenTasks();
  }

  @Get('/users')
  @Roles(['admin'])
  findAllByUsers() {
    return this.tasksService.findAllByUsers();
  }

  @Get(':id')
  @Roles(['member', 'admin'])
  findOne(@Param('id') id: string) {
    return this.tasksService.findTaskById(+id);
  }

  @Post()
  @Roles(['admin'])
  create(@Body() data: CreateTaskDto) {
    return this.tasksService.createTask(data);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() data: UpdateTaskDto) {
    return this.tasksService.updateTask(+id, data);
  }

  @Patch(':id/status')
  @Roles(['admin', 'member'])
  updateStatus(
    @Param('id') id: string,
    @Body() data: UpdateTaskStatusDto,
    @CurrentUser() user: JwtUser,
  ) {
    return this.tasksService.updateTaskStatus(+id, data.status, user);
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.tasksService.deleteTask(+id);
  }
  @Patch(':id/claim')
  @Roles(['admin', 'member'])
  claim(@Param('id') id: string, @CurrentUser() user: JwtUser) {
    return this.tasksService.claimTask(+id, +user.id);
  }

  @Patch(':id/release')
  @Roles(['admin', 'member'])
  release(@Param('id') id: string, @CurrentUser() user: JwtUser) {
    return this.tasksService.releaseTask(+id, user);
  }
}
