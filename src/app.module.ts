import { Module } from '@nestjs/common';
import { NotificationModule } from './modules/notifications/notifications.module';
import { PubSubModule } from './global/pubsub/pubsub.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/users/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), NotificationModule, PubSubModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
