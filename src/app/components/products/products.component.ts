import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs/Subscription";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../interfaces/category";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products;
  categories: Observable<Category[]>;
  filteredProducts;
  subs1: Subscription;
  subs2: Subscription;
  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.subs1= this.productService.getAll().subscribe(x =>
    {
      this.products = x;
    })
    this.categories = this.categoryService.getAll();
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subs1.unsubscribe();
   // this.subs2.unsubscribe();
  }

}
