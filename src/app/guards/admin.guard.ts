import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {AngularFirestore} from "angularfire2/firestore";
import {AuthService} from "../services/auth.service";
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user: firebase.User;
  constructor(private db: AngularFirestore, private auth: AuthService, private router: Router){
    this.auth.user.subscribe(x => this.user = x)
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(!this.user) return false;
    return this.db.collection('users').doc(this.user.uid).valueChanges().map((user: User) => {
      //console.log(user);
      if (user.admin) return true;
      this.router.navigateByUrl('');
      return false;
    });
  }
}
