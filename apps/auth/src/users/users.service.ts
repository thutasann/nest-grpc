import { CreateUserDto, UpdateUserDto } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return `This action adds a new user ${createUserDto.age}`;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} ${updateUserDto.id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
