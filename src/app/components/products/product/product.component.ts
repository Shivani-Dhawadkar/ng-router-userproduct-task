import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isvisble : boolean = true
  getproductId ! : number
  getproductObj !: Iproduct

  constructor(private _route:ActivatedRoute,
    private _productservice:ProductsService) { }

  ngOnInit(): void {
    // console.log(this._route.snapshot)
    this.getproductId = +this._route.snapshot.params['productid']
    console.log(this.getproductId, typeof this.getproductId)
    this.getproductObj = this._productservice.getsingleproduct(this.getproductId)!
    console.log(this.getproductObj)
  }
  
  
}
