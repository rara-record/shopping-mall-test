import { useEffect } from 'react';
import useProductDetailContext from './useProductDetailContext';

const useProductDetail = ({ productId }: {productId: string}) => {
  const { loading, error, fetchProduct } = useProductDetailContext();

  useEffect(() => {
    fetchProduct({ productId });
  }, [fetchProduct, productId]);

  return { loading, error };
};

export default useProductDetail;
