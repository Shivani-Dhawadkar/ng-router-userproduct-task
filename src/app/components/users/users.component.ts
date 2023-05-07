import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userInfo : Array<Iusers>= []
  selectedUserId !: number
  selectedUser ! : Iusers
  constructor(private _usersservice: UsersService) { }

  ngOnInit(): void {
    this.userInfo = this._usersservice.getAllUsers()
    this.selectedUserId = this.userInfo[0].id
    this.selectedUser = this.userInfo[0]
  }

}
