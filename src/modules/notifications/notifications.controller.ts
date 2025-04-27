import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserType } from '../users/user-type';
import { NotificationsService } from './notifications.service';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {
    console.log('NotificationsController foi instanciado!');
  }
  @MessagePattern('users-user-created')
  sendMail(data: UserType) {
    console.warn(`enviar email ${data.email}`);
    console.warn(data);
    // return await this.notificationsService.notifyUser(data.email);
  }
}
