import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/users.repository';
import { NotificationsService } from '../notifications/notifications.service';
import { User } from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly notificationService: NotificationsService,
  ) { }

  async create(data: User) {
    const user = await this.repository.create(data);
    await this.notificationService.notifyUser(data);
    return user;
  }
}
