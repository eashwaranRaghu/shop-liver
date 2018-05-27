import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take'
import * as fb from 'firebase';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {AuthService} from "./auth.service";
import 'rxjs/add/observable/of';
import {User} from "../interfaces/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userid: fb.User;
  constructor(private db: AngularFirestore, private auth: AuthService)
  {

  }
  save(user: fb.User){
    this.userid = user;
    this.db.collection('users').doc(user.uid).valueChanges().take(1).subscribe(
      x =>
      {
        if(x){this.updateSave(user);}
        else this.setSave(user);
      }
    );
  }
  setSave(user: fb.User){this.db.collection('users').doc(user.uid).set({name: user.displayName, email: user.email, admin: true});}
  updateSave(user: fb.User){this.db.collection('users').doc(user.uid).update({name: user.displayName, email: user.email, admin: true});}

}
