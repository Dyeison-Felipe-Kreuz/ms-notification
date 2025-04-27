import { Module } from '@nestjs/common';
import { NotificationModule } from './modules/notifications/notifications.module';
import { PubSubModule } from './global/pubsub/pubsub.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [NotificationModule, PubSubModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
