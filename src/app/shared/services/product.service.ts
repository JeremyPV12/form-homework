import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageProduct } from '../models/page';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5277'
  private urlProduct = 'api/Product';

  constructor( private httpCliente : HttpClient,
   ) { 
  }

  listProduct(Search : string, PageNumber :number,  PageSize: number , SortBy : string , IsDecsending : boolean ):Observable<PageProduct[]>{
    let params = new HttpParams()
      .set('Search', Search )
      .set('PageNumber',PageNumber)
      .set('PageSize', PageSize)
      .set( 'SortBy' , SortBy)
      .set( 'IsDecsending' , IsDecsending)
    return this.httpCliente.get<PageProduct[]>(`${this.apiUrl}/${this.urlProduct}`,{params})
  }

  createProduct(data : ProductModel):Observable<ProductModel>{
    return this.httpCliente.post<ProductModel>(`${this.apiUrl}/${this.urlProduct}`, data)
  }

  UpdateProduct(data: ProductModel, id : number):Observable<ProductModel>{
    return this.httpCliente.put<ProductModel>(`${this.apiUrl}/${this.urlProduct}/${id}`,data)
  }

  deleteProduct(id: number):Observable<ProductModel>{
    return this.httpCliente.delete<ProductModel>(`${this.apiUrl}/${this.urlProduct}/${id}`)
  }

}
