import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Product} from "../interfaces/product";
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  saveProduct(p){
    return this.db.collection('products').add(p);
    /*for(let i =0; i<5; i++){
      this.db.collection('products').add(p);
    }*/
  }
  getAll(){
    return this.db.collection('products').snapshotChanges().map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Product;
      const id = a.payload.doc.id;
      return { id, ...data };}
    ))
  }
  get(id) {
    return this.db.collection('products').doc(id).valueChanges();
  }
  update(id, product){
      return this.db.collection('products').doc(id).update(product);
    }
  delete(id){
    return this.db.collection('products').doc(id).delete();
  }
}
