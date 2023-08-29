import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  ngOnInit(): void {

    this.productService.getProducts().subscribe({
      next: products => this.products = products
    })

  }
  constructor(private productService: ProductService) {

  }


}
