import { PrismaModule } from 'src/prisma/prisma.module';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [ActivityService],
  controllers: [ActivityController],
})
export class ActivityModule {}
