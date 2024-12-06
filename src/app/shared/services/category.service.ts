import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageCategory } from '../models/page';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:5277'
  private urlCategory = 'api/Category';

  constructor( private httpCliente : HttpClient,
   ) { 
  }

  listCategory(Search : string, PageNumber :number,  PageSize: number , SortBy : string , IsDecsending : boolean ):Observable<PageCategory[]>{
    let params = new HttpParams()
      .set('Search', Search )
      .set('PageNumber',PageNumber)
      .set('PageSize', PageSize)
      .set( 'SortBy' , SortBy)
      .set( 'IsDecsending' , IsDecsending)
    return this.httpCliente.get<PageCategory[]>(`${this.apiUrl}/${this.urlCategory}`,{params})
  }

  createCategory(data : CategoryModel):Observable<CategoryModel>{
    return this.httpCliente.post<CategoryModel>(`${this.apiUrl}/${this.urlCategory}`, data)
  }

  updateCategory(data: CategoryModel, id : number):Observable<CategoryModel>{
    return this.httpCliente.put<CategoryModel>(`${this.apiUrl}/${this.urlCategory}/${id}`,data)
  }

  deleteCategory(id: number):Observable<CategoryModel>{
    return this.httpCliente.delete<CategoryModel>(`${this.apiUrl}/${this.urlCategory}/${id}`)
  }



}
