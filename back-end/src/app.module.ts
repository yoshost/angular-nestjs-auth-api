import { Module } from '@nestjs/common';
import { UsersModule } from './features/users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
