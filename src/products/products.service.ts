import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    { id: 1, name: 'Teclado mecánico', price: 89.99 },
    { id: 2, name: 'Mouse inalámbrico', price: 29.99 },
    { id: 3, name: 'Monitor 27"', price: 249.99 },
  ];

  findAll(): Product[] {
    return this.products;
  }
}
