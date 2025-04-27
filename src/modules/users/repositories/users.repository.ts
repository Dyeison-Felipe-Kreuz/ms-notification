import { Injectable } from "@nestjs/common";
import { User } from "../entities/users.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserType } from "../user-type";

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(data: UserType) {
    const userCreated = await this.userRepository.save({
      id: data.id,
      name: data.name,
      email: data.email,
    });

    return userCreated;
  }
}