import { Injectable } from '@angular/core';
import { Product } from './models/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  baseUrl: string = "http://localhost:3000/products";
  products: Product[] = [];

  constructor(private http: HttpClient) {

  }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  delete(product: Product): Observable<void> {

    let url = `${this.baseUrl}/${product.id}`;

    return this.http.delete<void>(url);
  }

}
