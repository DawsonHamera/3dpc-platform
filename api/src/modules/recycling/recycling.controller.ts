import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RecyclingService } from './recycling.service';
import { LogRecyclingDto } from './dto/log-recycling.dto';

@Controller('recycling')
export class RecyclingController {
  constructor(private readonly recyclingService: RecyclingService) {}

  @Get()
  @Roles(['admin'])
  findAll() {
    return this.recyclingService.findAll();
  }

  @Get('/stats')
  @Public()
  findStats() {
    return this.recyclingService.getStats();
  }

  @Get(':id')
  @Roles(['admin'])
  findOne(@Param('id') id: string) {
    return this.recyclingService.findOne(+id);
  }

  @Post()
  @Roles(['admin', 'member'])
  logRecycling(@CurrentUser() user, @Body() body: LogRecyclingDto) {
    return this.recyclingService.logRecycling(user.id, body);
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.recyclingService.remove(+id);
  }
}
