import { Component } from '@angular/core';
import { getProducts } from '../../../../environments/environment'
import { DocumentData } from 'firebase/firestore/lite';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Promise<DocumentData[]>

  constructor() {
    this.products = getProducts();
  }
  title = 'sunburst';

}
