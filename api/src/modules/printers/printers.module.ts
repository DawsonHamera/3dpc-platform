import { Module } from '@nestjs/common';
import { PrintersService } from './printers.service';
import { PrintersController } from './printers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PrintersService],
  controllers: [PrintersController],
})
export class PrintersModule {}
