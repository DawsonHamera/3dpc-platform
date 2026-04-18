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
import { OrdersService } from './orders.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { GenerateOrderTasksDto } from './dto/generate-order-tasks.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @Roles(['admin'])
  findAll(
    @Query('status') status?: string,
    @Query('filter') filter?: string,
    @Query('limit') limit?: number,
    @Query('order') order?: string,
  ) {
    return this.ordersService.findAllOrders(status, limit, order);
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

  @Post(':id/generate-tasks')
  @Roles(['admin'])
  generateTasks(
    @Param('id') id: string,
    @Body() options?: GenerateOrderTasksDto,
  ) {
    return this.ordersService.generateTasksFromOrder(+id, options);
  }

  @Patch(':id')
  @Roles(['admin'])
  update(@Param('id') id: string, @Body() data: Record<string, unknown>) {
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
  @Roles(['admin'])
  addItem(@Param('id') orderId: string, @Body() data: CreateOrderItemDto) {
    return this.ordersService.addOrderItem(+orderId, data);
  }

  @Patch(':id/items/:itemId')
  @Roles(['admin'])
  updateItem(
    @Param('id') orderId: string,
    @Param('itemId') itemId: string,
    @Body() data: UpdateOrderItemDto,
  ) {
    return this.ordersService.updateOrderItem(+orderId, +itemId, data);
  }

  @Delete(':id/items/:itemId')
  @Roles(['admin'])
  removeItem(@Param('id') orderId: string, @Param('itemId') itemId: string) {
    return this.ordersService.deleteOrderItem(+orderId, +itemId);
  }
}
