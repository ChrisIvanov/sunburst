import { Component } from '@angular/core';
import { Observable } from '@firebase/util';
import { getProducts } from '../../environments/environment';

interface Product {
  description: String,
  material: String,
  name: String,
  price: Number,
  id: Number
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent {
  products;
  constructor() {
    this.products = getProducts();
  }
}
