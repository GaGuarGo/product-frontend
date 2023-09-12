import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  formGroupProduct: FormGroup;

  ngOnInit(): void {

    this.productService.getProducts().subscribe({
      next: products => this.products = products
    })

  }
  constructor(private productService: ProductService, private formBuilder: FormBuilder) {

    this.formGroupProduct = formBuilder.group({
      name: ['Acer 5 Aspire'],
      price: ['15000'],
    });

  }


}
