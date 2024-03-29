import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) {}

  getAllProducts(){
   return this.http.get<Product[]>("http://localhost:8080/product/all")
  }
}
