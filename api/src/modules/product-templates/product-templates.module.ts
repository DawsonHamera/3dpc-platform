import { Module } from '@nestjs/common';
import { ProductTemplatesService } from './product-templates.service';
import { ProductTemplatesController } from './product-templates.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductTemplatesService],
  controllers: [ProductTemplatesController],
})
export class ProductTemplatesModule {}
