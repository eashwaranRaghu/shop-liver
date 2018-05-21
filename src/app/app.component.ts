import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "./services/user.service";
import {AngularFirestore} from "angularfire2/firestore";
import {User} from "./interfaces/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router, private userService: UserService, private db: AngularFirestore){
    this.auth.user.subscribe(
      (x) =>
      {
        if(x){
          localStorage.setItem('user', x.uid );
          this.userService.save(x);
          let returnurl = localStorage.getItem('returnUrl');
          this.router.navigateByUrl(returnurl);
          this.db.collection('users').doc(x.uid).valueChanges().subscribe((y: User) => localStorage.setItem('admin', ''+ y.admin));
        }
      }
    );
  }
}
