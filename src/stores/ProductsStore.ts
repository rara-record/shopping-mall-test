// TODO: 상품 목록을 관리하는 Store

import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { ProductSummary } from '../types';
import { apiService } from '../services/ApiService';

@singleton()
@Store()
export default class ProductsStore {
  products:ProductSummary[] = [];

  async fetchProducts({ categoryId }: {categoryId?: string}) {
    this.setProduct([]);

    const products = await apiService.fetchProducts({ categoryId });

    this.setProduct(products);
  }

  @Action()
  setProduct(products: ProductSummary[]) {
    this.products = products;
  }
}
