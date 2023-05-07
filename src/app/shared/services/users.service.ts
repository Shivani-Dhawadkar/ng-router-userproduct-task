import { Injectable } from '@angular/core';
import { Iusers } from 'src/app/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray : Array<Iusers> =[{
    userName : 'jhon',
    id: 1,
    prodName : 'samsung',
    prodStatus : 'in-progress'
  },{
    userName : 'jen',
    id : 2,
    prodName : 'iphone',
    prodStatus : 'dispatched'
  },{
    userName : 'july',
    id : 3,
    prodName : 'samsung',
    prodStatus : 'Ready to Dispatch'
  }]
  constructor() { }

  getAllUsers(): Array<Iusers>{
    return this.usersArray
  }
  getsingleuser(id:number){
    return this.usersArray.find((user)=>
    user.id === id)
  }
  updateUser(obj:Iusers){
    this.usersArray.forEach(user=>{
     if( user.id === obj.id){
      user.prodName = obj.prodName,
      user.prodStatus = obj.prodStatus
     }
    })
  }
}
