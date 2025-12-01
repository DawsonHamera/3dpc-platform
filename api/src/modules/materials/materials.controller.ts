import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Get()
  @Public()
  findAll() {
    return this.materialsService.findAllMaterials();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.materialsService.findMaterialById(+id);
  }

  @Post()
  @Roles(['admin'])
  create(@Body() data: any) {
    return this.materialsService.createMaterial(data);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() data: any) {
    return this.materialsService.updateMaterial(+id, data);
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.materialsService.deleteMaterial(+id);
  }
}
