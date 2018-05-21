import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {AuthService} from "./auth.service";
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import * as fb from "firebase"
import {Product} from "../interfaces/product";
import {number} from "ng2-validation/dist/number";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  user: fb.User;
  constructor(private db: AngularFirestore, private auth: AuthService) {
    this.auth.user.take(1).subscribe(x => this.user = x)
  }
  Add(id, num: number)
  {
    this.db.collection('cart/' + localStorage.getItem('user')+ '/cart').doc(id).valueChanges().take(1).subscribe(x =>
    {
      if(x)
      {
        let count = (x as any).count;
        if(count+num >=0 ){
          this.db.collection('cart/' + localStorage.getItem('user')+ '/cart').doc(id).set({count: count+num});
        }
        //console.log((x as any).count)
      }
    })
    this.db.collection('cart/' + localStorage.getItem('user')+ '/cart').doc(id).set({count: 1});
    //console.log('done');
  }
  empty(id){
    this.db.collection('cart/' + localStorage.getItem('user')+ '/cart').doc(id).set({count: 0});
  }
  getAll(){
    return this.db.collection('cart/' + localStorage.getItem('user')+ '/cart').snapshotChanges().map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data };}
    ))
  }
  getAllVal(){
    return this.db.collection('cart/' + localStorage.getItem('user')+ '/cart').valueChanges();
  }

  }

