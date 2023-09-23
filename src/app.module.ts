import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UuidModule } from './uuid/uuid.module';
import { ClockService } from './clock/clock.service';
import { ClockModule } from './clock/clock.module';

@Module({
  imports: [UserModule, UuidModule, ClockModule],
  controllers: [AppController],
  providers: [AppService, ClockService],
})
export class AppModule {}
