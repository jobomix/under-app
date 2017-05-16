import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../model/user.class';
import { UsersService } from '../services/users.service';


@Component({

  // tslint:disable-next-line:component-selector
  selector: 'users',
  templateUrl: '../templates/users.component.html',
  styleUrls: ['../templates/users.component.css']
})

export class UsersComponent implements OnInit {

  title = 'app works well!';
  loadedUsers = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
      this.loadedUsers = this.usersService.getAllUsers();
  }

}
