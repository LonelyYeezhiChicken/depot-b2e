import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UuidModule } from './uuid/uuid.module';

@Module({
  imports: [UserModule, UuidModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
