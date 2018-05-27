import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.css']
})
export class ManageproductsComponent implements OnInit, OnDestroy{
  products;
  filteredProducts;
  subscription: Subscription;
  constructor(private productservice: ProductService) {
    this.subscription = this.productservice.getAll().subscribe(
      x =>
      {
        this.products = x;
      }
    );
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  filter(query){
    console.log(query);
  }
  delete(id){
    this.productservice.delete(id);
  }


}
