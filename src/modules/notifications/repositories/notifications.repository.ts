import { Repository } from "typeorm";
import { Notification } from "../entities/notifications.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { NotificationType } from "../notification-type";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class NotificationsRepository {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
    private readonly configService: ConfigService
  ) { }
  async createNotification(notification: NotificationType) {
    const notificationCreate = await this.notificationRepository.save({
      id: notification.id,
      title: this.configService.get<string>('TITLE_EMAIL'),
      message: this.configService.get<string>('MESSAGE_EMAIL'),
      user: notification.user
    });

    return notificationCreate;
  }
}