import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  // prodArray : Array<Iproduct> = this._productsservice.productsArray
  productinfo : Array<Iproduct> = [];
  selectedproduct! :Iproduct ;
  slectedproductid! : number
  constructor(private _productsservice :ProductsService) { }

  ngOnInit(): void {
    this.productinfo = this._productsservice.productsArray
    this.selectedproduct =this.productinfo[0]
    this.slectedproductid = this.productinfo[0].pid
  }

}
