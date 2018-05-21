import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";
import {CheckoutService} from "../../services/checkout.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: any = [];
  public counter: number = 0;
  constructor(private cartService: CartService, private productService: ProductService, private checkoutS: CheckoutService) {
    cartService.getAll().subscribe( x =>
    {
      this.cartList = x;
      //console.log(this.cartList);
      for(let y of this.cartList)
        {
          this.productService.get(y.id).take(1).subscribe(z =>
            {
              y['product'] = z ;
            }
          );

        }
        // for ended




    });

  }
  inc(id){this.cartService.Add(id ,1); this.checkCart();}
  dec(id){this.cartService.Add(id ,-1); this.checkCart();}
  empty(id){this.cartService.empty(id); this.checkCart(); }
  checkCart(){
    this.counter =0;
    for(let c of this.cartList){
      if(c.product.price){
        this.counter += (c.count * c.product.price);
        //console.log(c.product);
      }
    }
  }

  ngOnInit() {
    setInterval(this.checkCart(), 1000);
  }
  addtoOrders(){
   this.checkoutS.checkout(this.cartList);
  }
}
