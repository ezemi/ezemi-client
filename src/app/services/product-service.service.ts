import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';
import { Product } from '../Models/product';
import { Productdto } from '../Models/productdto';
import { Status } from '../Models/status';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient : HttpClient) { }

  getallcategory():Observable<Category[]>{
    return this.httpClient.get<Category[]>("http://localhost:9090/allcategory");
  }

  addcategory(ctg:Category):Observable<Status>{
    return this.httpClient.post<Status>("http://localhost:9090/addcategory", ctg);
  }

  getallproduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9090/allproducts");
  }

  addproduct(formdata: FormData):Observable<Status>{
    return this.httpClient.post<Status>("http://localhost:9090/addproduct", formdata);
  }
  
}
