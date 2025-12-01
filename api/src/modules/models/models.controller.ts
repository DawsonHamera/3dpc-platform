import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ModelsService } from './models.service';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  @Get()
  @Roles(['admin', 'member'])
  findAll() {
    return this.modelsService.findAllModels();
  }

  @Get(':id')
  @Roles(['admin', 'member'])
  findOne(@Param('id') id: string) {
    return this.modelsService.findModelById(+id);
  }

  @Post()
  @Roles(['admin'])
  create(@Body() data: any) {
    return this.modelsService.createModel(data);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() data: any) {
    return this.modelsService.updateModel(+id, data);
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.modelsService.deleteModel(+id);
  }
}
