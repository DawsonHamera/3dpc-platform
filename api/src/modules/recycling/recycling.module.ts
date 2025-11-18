import { Module } from '@nestjs/common';
import { RecyclingController } from './recycling.controller';
import { RecyclingService } from './recycling.service';

@Module({
  imports: [],
  controllers: [RecyclingController],
  providers: [RecyclingService],
  exports: [RecyclingService],
})
export class RecyclingModule {}
