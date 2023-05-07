import { Injectable } from '@angular/core';
import { Iproduct } from 'src/app/model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  productsArray : Array<Iproduct> =[{
    pname : 'samsung a71',
    pid: 1,
    pstatus : 'Ready to Dispatch',
    img:'https://images.unsplash.com/photo-1609561954579-f5d38cece8c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbXN1bmclMjBtb2JpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
  },{
    pname : 'Iphone 14',
    pid: 2,
    pstatus : 'In-Progress',
    img:'https://images.unsplash.com/photo-1624006930534-15f969856847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'
  },{
    pname : 'oppo',
    pid: 3,
    pstatus : 'Dispatched',
    img:'https://images.unsplash.com/photo-1562254492-377a3ac576f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  }]

  constructor() { }

  getallProducts(){
    return this.productsArray
  }
  getsingleproduct(id:number){
   return this.productsArray.find((prod)=>
   prod.pid === id
   )
  }
  updateproduct(obj:Iproduct){
    this.productsArray.forEach(prod=>{
      if(prod.pid===obj.pid){
        prod.pname =obj.pname,
        prod.pstatus = obj.pstatus
      }
    })
  }
}
