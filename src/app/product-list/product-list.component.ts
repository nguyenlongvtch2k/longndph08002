import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {data} from '../MockData';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
products = data;
selected:Product;
showDetail(product){
  this.selected= product;
  console.log(product);
  
}
remove(id){
  this.products = this.products.filter(x => x.id !== id);
  }
}
