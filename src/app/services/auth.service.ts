import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '@firebase/app';

import { Observable } from 'rxjs';
import * as fb from "firebase";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

//import { FirebaseAuth } from '@firebase/auth-types';
//import * as firebase from 'firebase';
//import {AngularFireAuth} from "angularfire2/auth";
//import * as firebaseauth from 'firebase/auth'
//import {auth} from 'firebase';
//import 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<fb.User>;

  constructor(private auth: AngularFireAuth) {
    this.user = auth.authState;
  }
  login(){
    this.auth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this.auth.auth.signOut();
  }
}
