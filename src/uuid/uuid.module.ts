import { Module ,Global } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Global()
@Module({
  providers: [
    {
      provide: 'UserServiceInterface',
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: 'UserServiceInterface',
      useClass: UserService,
    },
  ],
})
export class UuidModule {}
