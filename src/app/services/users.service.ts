import { Injectable } from '@angular/core';
import {User} from '../model/user.class';

const users: User[] = [
  new User('+44 7882316130', 'Check if it works;'),
  new User('+44 1234567890', 'Dummy phone #'),
  new User('+44 7882316130', 'Check if it works;'),
  new User('+44 7882316130', 'Check if it works;'),
  new User('+44 7882316130', 'Check if it works;')
];

@Injectable()
export class UsersService {

  constructor() { }

  getAllUsers(): User[] {
    return users;
  }

}
