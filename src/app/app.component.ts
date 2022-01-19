import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'The good Angular programmer';
  
  userList: User[] = [];
  currentUser: User = new User();

  constructor(private userService: UserService) {
    this.userList = userService.list;
    this.userService = userService;
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userList = this.userService.list;
  }

  selectUser(user: User): void {
    this.currentUser = user;
  }

  removeUser(user: User): void {
    this.userService.removeUser(user);
  }

  updateUser(user: User): void {
    this.userService.updateUser(user);
  }
}
