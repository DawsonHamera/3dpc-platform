import { Module } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, UsersService],
  exports: [ProductsService],
})
export class ProductsModule {}
