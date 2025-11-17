import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(['admin'])
  findAll() {
    return this.usersService.findAll();
  }

  @Get('profile')
  @Roles(['admin', 'member', 'viewer'])
  findProfile(@CurrentUser() user) {
    return user;
  }

  @Get('points')
  @Roles(['admin', 'member', 'viewer'])
  findPoints() {
    return this.usersService.findPoints();
  }

  @Get(':id')
  @Roles(['admin'])
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  @Roles(['admin'])
  create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('heartbeat')
  heartbeat(@CurrentUser() user) {
    return this.usersService.update(user.id, { last_active: new Date() });
  }

  @Post(':id/points')
  @Roles(['admin'])
  async updatePoints(
    @Param('id') id: string,
    @Body() body: { points: number; reason: string; details?: string },
  ) {
    const { points, reason, details } = body;
    const user = await this.usersService.updateUserPoints(
      +id,
      points,
      reason,
      details,
    );
    if (!user) {
      return { error: `No user found with id ${id}` };
    }
    return { message: 'User score updated successfully', user };
  }

  @Get(':id/points/logs')
  @Roles(['admin'])
  getUserPointsLogs(@Param('id') id: string) {
    return this.usersService.getUserPointsLogs(+id);
  }
}
