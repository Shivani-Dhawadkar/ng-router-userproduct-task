import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userid ! : number
  userobject ! : Iusers
  

  constructor(private _route: ActivatedRoute,
    private _userservice : UsersService) { }

  ngOnInit(): void {
    this._route.params
    .subscribe((myParams : Params)=>{
      console.log(myParams)
      this.userid = +myParams['userid']
      this.userobject = this._userservice.getsingleuser(this.userid)!
    })

  }

}
