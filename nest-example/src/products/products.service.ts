import { Inject, Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import { PRODUCTS_REPOSITORY, ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCTS_REPOSITORY)
    private readonly productsRepository: ProductsRepository,
  ) {}

  findAll(): Product[] {
    return this.productsRepository.findAll();
  }
}
