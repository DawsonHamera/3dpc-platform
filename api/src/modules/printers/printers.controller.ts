import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PrintersService } from './printers.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('printers')
export class PrintersController {
  constructor(private readonly printersService: PrintersService) {}

  @Get()
  @Public()
  findAll() {
    return this.printersService.findAllPrinters();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.printersService.findPrinterById(+id);
  }

  @Post()
  @Roles(['admin'])
  create(@Body() data: any) {
    return this.printersService.createPrinter(data);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() data: any) {
    return this.printersService.updatePrinter(+id, data);
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.printersService.deletePrinter(+id);
  }
}
