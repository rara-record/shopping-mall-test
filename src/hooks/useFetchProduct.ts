// TODO: 상품 상세 정보 받아오기
import { useEffect } from 'react';
import useProductDetailStore from './useProductDetailStore';

const useFetchProduct = ({ productId }: { productId: string}) => {
  const [{ loading, error }, store] = useProductDetailStore();

  useEffect(() => {
    store.fetchProduct({ productId });
  }, [productId, store]);

  return { loading, error };
};
export default useFetchProduct;
