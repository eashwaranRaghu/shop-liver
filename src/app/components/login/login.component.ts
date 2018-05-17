import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let returnurl = this.route.snapshot.queryParamMap.get('returnUrl');
    localStorage.setItem('returnUrl', returnurl);
  }
  login()
  {
    this.auth.login();
  }

}
