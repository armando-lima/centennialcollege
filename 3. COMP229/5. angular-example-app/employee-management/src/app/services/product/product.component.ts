import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  public products = [
    { name: 'Macbook Pro', company: 'Apple', price: 2499.99 },
    { name: 'iPad', company: 'Apple', price: 1299.99 },
    { name: 'TV', company: 'Samsung', price: 1499.99 },
    { name: 'Bag', company: 'Carlton', price: 49.99 },
  ];
}
