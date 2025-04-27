import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserType } from './user-type';
import { UserService } from './user.service';

@Controller()
export default class UserExternalController {
  constructor(private readonly usersService: UserService) {}
  @MessagePattern('users-user-created')
  async createUser(data: UserType) {
    console.warn(`Usuário criado ${data.id}`);
    console.warn(data);
    await this.usersService.notifyUser(data.email);
    return await this.usersService.create(data);
  }
}
