import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  CreateUserDto,
  PaginationDto,
  USERS_SERVICE_NAME,
  UpdateUserDto,
  UsersServiceClient,
} from '@app/common';
import { AUTH_SERVICE } from './constants';
import { ClientGrpc } from '@nestjs/microservices';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class UsersService implements OnModuleInit {
  private usersService: UsersServiceClient;

  constructor(@Inject(AUTH_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.usersService =
      this.client.getService<UsersServiceClient>(USERS_SERVICE_NAME);
  }

  create(createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  findAll() {
    return this.usersService.findAllUsers({});
  }

  findOne(id: string) {
    return this.usersService.findOneUser({ id });
  }

  update(updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(updateUserDto);
  }

  remove(id: string) {
    return this.usersService.removeUser({ id });
  }

  emailUsers() {
    const user$ = new ReplaySubject<PaginationDto>();
    user$.next({ page: 0, skip: 25 });
    user$.next({ page: 1, skip: 25 });
    user$.next({ page: 2, skip: 25 });
    user$.next({ page: 3, skip: 25 });

    user$.complete();

    let chunkNumber = 1;

    this.usersService.queryUsers(user$).subscribe((users) => {
      console.log('Chunk ', chunkNumber, users);
      chunkNumber++;
    });
  }
}
