import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'

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
  private productsCollection: AngularFirestoreCollection<Product>
  products: Observable<Product[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.productsCollection = this.afs.collection<Product>("Products");
    this.products = this.productsCollection.valueChanges({ idField: 'customID' });
  }

  // async getProducts() {

  //   if(docSnap != null || docSnap != undefined) {
  //     console.log("Document data: ", docSnap)
  //   } else {
  //     console.log("No such document!");
  //   }
  // }
}
