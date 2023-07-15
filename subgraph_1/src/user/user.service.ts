import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class UserService {
  constructor(
    @InjectPinoLogger(UserService.name)
    public logger: PinoLogger,
  ) {}
  // add mail to the user object
  users: User[] = [
    { id: 1, name: 'John Doe', nickname: 'Johnny', mail: 'example@mail.com' },
    { id: 2, name: 'Jane Doe', nickname: 'Janie', mail: 'example@mail.com' },
  ];

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
