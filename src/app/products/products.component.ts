import { Component, OnInit } from '@angular/core';
import { Product } from '../modal/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    new Product(101, 'Air Max', 110, 5),
    new Product(201, 'Hoodie', 50, 4),
    new Product(301, 'TV', 500, 4),
    new Product(401, 'Controller', 50, 4),
    new Product(501, 'PC', 700, 5),
  ];

  showProducts = false;

  constructor() {}

  ngOnInit(): void {}
}
