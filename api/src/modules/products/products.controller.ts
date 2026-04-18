import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { UpdateSectionOrderDto } from './dto/update-section-order.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @Public()
  findAll(@Query('type') type: string) {
    return this.productsService.findAllProducts(type);
  }

  @Get('/sections')
  @Public()
  findAllSections(@Query('type') type: string) {
    return this.productsService.findAllSections(type);
  }

  @Get(':id/variants/:variantId')
  @Public()
  findVarient(@Param('id') id: string, @Param('variantId') variantId: string) {
    return this.productsService.findVariantById(+variantId);
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.productsService.findProductById(+id);
  }

  @Post()
  @Roles(['admin'])
  create(@Body() data: any) {
    return this.productsService.createProduct(data);
  }

  @Post(':id/variant')
  @Roles(['admin'])
  createVariant(@Param('id') id: string, @Body() data: any) {
    return this.productsService.createVariant(+id, data);
  }

  @Post('/section')
  @Roles(['admin'])
  createSection(@Body() data: any) {
    return this.productsService.createSection(data);
  }

  @Patch('sections/order')
  @Roles(['admin'])
  /**
   * Reorder contract: payload must include every section in the selected domain.
   * Domain is global when `type` is omitted, or restricted to the provided `type`.
   */
  async reorderSections(@Body() updateDto: UpdateSectionOrderDto) {
    return this.productsService.reorderSections(updateDto);
  }

  @Patch('/section/:id')
  @Roles(['admin'])
  updateSection(@Param('id') id: string, @Body() data: any) {
    return this.productsService.updateSection(+id, data);
  }

  @Patch(':id/variant/:variantId')
  @Roles(['admin'])
  updateVariant(
    @Param('id') id: string,
    @Param('variantId') variantId: string,
    @Body() data: any,
  ) {
    return this.productsService.updateVariant(+variantId, data);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() data: any) {
    return this.productsService.updateProduct(+id, data);
  }
  @Delete('/section/:id')
  @Roles(['admin'])
  removeSection(@Param('id') id: string) {
    return this.productsService.deleteSection(+id);
  }

  @Delete(':id/variant/:variantId')
  @Roles(['admin'])
  removeVariant(
    @Param('id') id: string,
    @Param('variantId') variantId: string,
  ) {
    return this.productsService.deleteVariant(+variantId);
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.productsService.deleteProduct(+id);
  }
}
