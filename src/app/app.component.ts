import { Component, OnInit } from '@angular/core';
import { PageCategory, PageProduct } from './shared/models/page';
import { ProductModel } from './shared/models/product';
import { ProductService } from './shared/services/product.service';
import { CategoryModel } from './shared/models/category';
import { CategoryService } from './shared/services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'form-homework';

  pageProduct : PageProduct | any

  listProduct : ProductModel[] = []

  Search : string = ''
  PageNumber : number = 1
  PageSize: number = 10
  SortBy : string = ''
  IsDecsending : boolean = false


  pageCategory : PageCategory | any

  listCategory : CategoryModel[] = []

  SearchCategory : string = ''
  PageNumberCategory  : number = 1
  PageSizeCategory : number = 10
  SortByCategory  : string = ''
  IsDecsendingCategory  : boolean = false


  constructor(
    private productService : ProductService,
    private categoryService : CategoryService,

  ){

  }

  ngOnInit(): void {
    this.getProuct()
    this.getCategory()
  }

  getProuct(){
    this.productService.listProduct(this.Search,this.PageNumber,this.PageSize,this.SortBy,this.IsDecsending).subscribe(
      {
        next: (data : PageProduct |any ) => {
          this.listProduct = data.item
        }
      }
    )
  }


  getCategory(){
    this.categoryService.listCategory(this.SearchCategory,this.PageNumberCategory,this.PageSizeCategory,this.SortByCategory,this.IsDecsendingCategory).subscribe(
      {
        next: (data : PageCategory | any) => {
          this.listCategory = data.item
        }
      }
    )
  }

}
