import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/users.entity';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export default class UserExternalController {
  constructor(private readonly usersService: UserService) {}
  @MessagePattern('users-user-created')
  async createUser(data: User) {
    return await this.usersService.create(data);
  }
}
