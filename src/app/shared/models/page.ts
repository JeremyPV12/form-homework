import { CategoryModel } from "./category";
import { ProductModel } from "./product";

export interface PageProduct {
    item : ProductModel,
    totalCount : number,
    pageNumber : number,
    PageSize : number,
    totalPage: number
}

export interface PageCategory {
    item : CategoryModel,
    totalCount : number,
    pageNumber : number,
    PageSize : number,
    totalPage: number
}