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
  categoryfilter;
  searchfilter;
  products;
  categories: Observable<Category[]>;
  filteredProducts =[];
  tempProducts;
  subs1: Subscription;
  //subs2: Subscription;
  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.subs1= this.productService.getAll().subscribe(x =>
    {
      this.products = x;
      this.filteredProducts = x;
    });
    this.categories = this.categoryService.getAll();
  }

  ngOnInit() {
    this.filteredProducts = this.products;
  }
  ngOnDestroy(){
    this.subs1.unsubscribe();
   // this.subs2.unsubscribe();
  }
  filter(){
    //console.log(this.searchfilter);
    //console.log(this.categoryfilter);


    if(this.searchfilter && this.categoryfilter){
      this.filteredProducts = [];
      this.products.forEach( x =>
      {if
      ((x.title.toLowerCase().includes(this.searchfilter.toLowerCase())
        ||
        x.category.toLowerCase().includes(this.searchfilter.toLowerCase()))
      &&
        x.category.toLowerCase().includes(this.categoryfilter.toLowerCase())
      ){this.filteredProducts.push(x);} });
    }
    else if(this.categoryfilter){
      this.filteredProducts = [];
      this.products.forEach( x =>
      {if(x.category.toLowerCase().includes(this.categoryfilter.toLowerCase())){this.filteredProducts.push(x);} });
    }
    else if(this.searchfilter){
      this.filteredProducts = [];
      this.products.forEach( x =>
      {if (x.title.toLowerCase().includes(this.searchfilter.toLowerCase())
        ||
        x.category.toLowerCase().includes(this.searchfilter.toLowerCase())
      ){this.filteredProducts.push(x);} });
    }
    else{
      this.filteredProducts = this.products;
    }


  }
  cat(c){
    this.categoryfilter = c.id;
    this.filter();
  }

}
