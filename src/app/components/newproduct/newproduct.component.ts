import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ProductService} from "../../services/product.service";
import { ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  categories;
  product;
  id:string = null;
  edit: boolean = false;
  constructor(
    private categoryList: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categories = this.categoryList.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    if(this.id){
      console.log("not null");
      this.edit = true;
      this.productService.get(this.id).take(1).subscribe( x => this.product = x)
    }
  }

  submiter(f){
    if(this.edit) this.productService.update(this.id,f)
    else this.productService.saveProduct(f);
    this.router.navigateByUrl('admin/products');
  }


}
