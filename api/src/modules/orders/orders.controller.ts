import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { CreateOrderDto } from './dto/CreateOrderDto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @Roles(['admin'])
  findAll() {
    return this.ordersService.findAllOrders();
  }

  @Get(':id')
  @Roles(['admin'])
  findOne(@Param('id') id: string) {
    return this.ordersService.findOrderById(+id);
  }

  @Get('key/:key')
  @Public()
  findByKey(@Param('key') key: string) {
    return this.ordersService.findOrderByKey(key);
  }

  @Post()
  @Public()
  create(@Body() data: CreateOrderDto) {
    return this.ordersService.createOrder(data);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() data: any) {
    return this.ordersService.updateOrder(+id, data);
  }

  @Delete(':id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.ordersService.deleteOrder(+id);
  }

  @Get(':id/items')
  findItems(@Param('id') orderId: string) {
    return this.ordersService.findOrderItems(+orderId);
  }

  @Post(':id/items')
  @Public()
  addItem(@Param('id') orderId: string, @Body() data: any) {
    return this.ordersService.addOrderItem(+orderId, data);
  }

  @Patch(':id/items/:itemId')
  updateItem(
    @Param('id') orderId: string,
    @Param('itemId') itemId: string,
    @Body() data: any,
  ) {
    return this.ordersService.updateOrderItem(+orderId, +itemId, data);
  }

  @Delete(':id/items/:itemId')
  removeItem(@Param('id') orderId: string, @Param('itemId') itemId: string) {
    return this.ordersService.deleteOrderItem(+orderId, +itemId);
  }
}
