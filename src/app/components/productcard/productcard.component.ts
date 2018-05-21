import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  @Input('product') product: Product;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  Add(num: number){
    this.cartService.Add(this.product.id, num);
  }
  Empty(){
    this.cartService.empty(this.product.id);
  }


}
