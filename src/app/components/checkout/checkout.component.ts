import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Observable} from "rxjs/Observable";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(){}

  ngOnInit() {
  }


}
