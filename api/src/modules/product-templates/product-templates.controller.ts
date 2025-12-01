import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductTemplatesService } from './product-templates.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('product-templates')
export class ProductTemplatesController {
  constructor(
    private readonly productTemplatesService: ProductTemplatesService,
  ) {}

  @Get()
  @Public()
  findAll() {
    return this.productTemplatesService.findAllProductTemplates();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.productTemplatesService.findProductTemplateById(+id);
  }

  @Post()
  @Roles(['admin'])
  create(@Body() data: any) {
    return this.productTemplatesService.createProductTemplate(data);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() data: any) {
    return this.productTemplatesService.updateProductTemplate(+id, data);
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.productTemplatesService.deleteProductTemplate(+id);
  }
}
