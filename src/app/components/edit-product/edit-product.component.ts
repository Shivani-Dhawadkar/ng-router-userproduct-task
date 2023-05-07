import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct, Ipstatus } from 'src/app/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId !: number
  selectedObj! : Iproduct
  selectimg! : string

  constructor(private _route : ActivatedRoute,
    private _productservice : ProductsService,
    private _router: Router) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['productid']
    this.selectedObj = this._productservice.getsingleproduct(this.productId)!
  }
  onProdUpdate(pname : HTMLInputElement, pstatus : HTMLSelectElement){
    let obj : Iproduct ={
      pname : pname.value,
      pstatus : pstatus.value as Ipstatus,
      pid : this.productId,
      img : this.selectimg
    }
    this._productservice.updateproduct(obj)
    this._router.navigate(['products', this.productId])
  }

}
