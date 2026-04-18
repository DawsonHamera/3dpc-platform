import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesGuard } from './common/guards/roles.guards';
import appConfig from './config/app.config';
import jwtConfig from './config/jwt.config';
import { ActivityModule } from './modules/activity/activity.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { ErrorReportsModule } from './modules/error-reports/error-reports.module';
import { EventsModule } from './modules/events/events.module';
import { FilesModule } from './modules/files/files.module';
import { MaterialsModule } from './modules/materials/materials.module';
import { ModelsModule } from './modules/models/models.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PrintersModule } from './modules/printers/printers.module';
import { ProductsModule } from './modules/products/products.module';
import { RecyclingModule } from './modules/recycling/recycling.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, jwtConfig],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    PrismaModule,
    UsersModule,
    EventsModule,
    AuthModule,
    ErrorReportsModule,
    FilesModule,
    RecyclingModule,

    ModelsModule,
    MaterialsModule,
    OrdersModule,
    TasksModule,
    PrintersModule,
    ProductsModule,

    ActivityModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
