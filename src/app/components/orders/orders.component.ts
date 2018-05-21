import { Component, OnInit } from '@angular/core';
import {CheckoutService} from "../../services/checkout.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 OrdersList;
 date;
  constructor(private checkoutService: CheckoutService) {
    this.checkoutService.getAll().subscribe( x =>
      this.OrdersList = x['cartList']
    )
  }

  ngOnInit() {
   // this.date = new Date().getDay();
    this.date = 5;
  }


}
