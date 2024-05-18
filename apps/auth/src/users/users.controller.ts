import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  Empty,
  FindOneUserDto,
  PaginationDto,
  UpdateUserDto,
  User,
  Users,
  UsersServiceController,
  UsersServiceControllerMethods,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController {
  constructor(private readonly usersService: UsersService) {}

  createUser(request: CreateUserDto): User | Observable<User> | Promise<User> {
    return this.usersService.create(request);
  }

  findAllUsers(request: Empty): Users | Observable<Users> | Promise<Users> {
    return this.usersService.findAll();
  }

  findOneUser(
    request: FindOneUserDto,
  ): User | Observable<User> | Promise<User> {
    return this.usersService.findOne(request.id);
  }

  updateUser(request: UpdateUserDto): User | Observable<User> | Promise<User> {
    return this.usersService.update(request.id, request);
  }

  removeUser(request: FindOneUserDto): User | Observable<User> | Promise<User> {
    return this.usersService.remove(request.id);
  }

  queryUsers(
    paginationDtoStream: Observable<PaginationDto>,
  ): Observable<Users> {
    return this.usersService.queryUsers(paginationDtoStream);
  }
}
