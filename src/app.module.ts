import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UUIDService } from './uuid-service/uuid.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, UUIDService,
    {
      provide: 'UUIDServiceInterface',
      useClass: UUIDService,
    },],
})
export class AppModule {}
