import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  constructor(private db: AngularFirestore) { }

  getProducts(name: string) {
    return new Promise<any>((resolve) => {
      this.db.collection('Products', ref => ref.where('name', '==', 'name'))
        .valueChanges().subscribe(products => resolve(products))
    })
  }
}
