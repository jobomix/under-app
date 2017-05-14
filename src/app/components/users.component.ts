import { Component } from '@angular/core'; 
import { User } from '../model/user.class';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'users',
  templateUrl: '../templates/users.component.html',
  styleUrls: ['../templates/users.component.css'],
  providers:[UsersService]
})

export class UsersComponent {
  title = 'app works well!';
  loadedUsers = [];

  constructor(private usersService: UsersService) {
    this.loadedUsers = usersService.getAllUsers();
  }

}
