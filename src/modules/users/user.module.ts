import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import UserExternalController from './user-external.controller';
import { UserService } from './user.service';
import { UserRepository } from './repositories/users.repository';
import { NotificationModule } from '../notifications/notifications.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), NotificationModule],
  controllers: [UserExternalController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
