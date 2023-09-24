import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UuidModule } from './uuid/uuid.module';
import { ClockModule } from './clock/clock.module';
import { ErrorCheckModule } from './error-check/error-check.module';

@Module({
  imports: [UserModule, UuidModule, ClockModule, ErrorCheckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
