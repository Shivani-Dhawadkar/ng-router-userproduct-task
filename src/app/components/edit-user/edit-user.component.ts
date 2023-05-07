import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ipusers, Iusers } from 'src/app/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
 userid ! : number
 selectedUser !: Iusers 
 userNameedit ! : string
  constructor(private _userservice : UsersService,
    private _route : ActivatedRoute,
    private _router : Router) { }

  ngOnInit(): void {
    this.userid = +this._route.snapshot.params['userid']
    console.log(this.userid)
    this.selectedUser = this._userservice.getsingleuser(this.userid)!
  }
  onProdUpdate(pname:HTMLInputElement, pstatus:HTMLSelectElement){
    let obj: Iusers ={
     prodName : pname.value ,
     prodStatus : pstatus.value as Ipusers,
     userName : this.userNameedit,
     id : this.userid
    }
    this._userservice.updateUser(obj)
    this._router.navigate(['users',this.userid])
  }

} 
