// TODO: 상품 상세 정보를 관리하는 Store
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { apiService } from '../services/ApiService';
import { nullProductDetail, ProductDetail } from '../types';

@singleton()
@Store()
export default class ProductDetailStore {
  product: ProductDetail = nullProductDetail;

  loading = false;

  error = false;

  async fetchProduct({ productId }: { productId: string }) {
    this.setLoading();

    try {
      const product = await apiService.fetchProduct({ productId });
      this.setProduct(product);
    } catch {
      this.setError();
    }
  }

  @Action()
  setProduct(product: ProductDetail) {
    this.product = product;
    this.loading = false;
    this.error = false;
  }

  @Action()
  setLoading() {
    this.setProduct(nullProductDetail);
    this.loading = true;
    this.error = false;
  }

  @Action()
  setError() {
    this.setProduct(nullProductDetail);
    this.loading = false;
    this.error = true;
  }
}
