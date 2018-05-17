import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userstate: any = '';
  constructor( private auth: AuthService) {
    this.auth.user.subscribe(x => {this.userstate = x;});

  }
  logout()
  {
    this.auth.logout();
  }


  ngOnInit() {
  }

  admin: string = localStorage.getItem('admin');

}
