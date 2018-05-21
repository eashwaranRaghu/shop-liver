import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private db: AngularFirestore) { }
  checkout(cartList: any[]){
    return this.db.collection('orders').doc(localStorage.getItem('user')).set({cartList: cartList});

  }
  getAll(){
    return this.db.collection('orders').doc(localStorage.getItem('user')).valueChanges();
  }
}
