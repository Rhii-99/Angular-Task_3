import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsUrl } from 'src/app/config/api';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl= 'https://fakestoreapi.com/products/';
  constructor(private http: HttpClient) { }

  productList: Product[];
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }
  deleteProduct(id: number) {
     return this.http.delete(this.productsUrl+id);
   }
   getProduct(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl+id);
  }
  updateProduct({ id, value }: { id: number; value: any; }) : Observable<Object> {
    return this.http.put(`${this.productsUrl}/${id}`, value);
  }
}
