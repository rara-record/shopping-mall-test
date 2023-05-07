import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';
import { ProductDetail } from '../src/types';
import { apiService } from '../src/services/ApiService';

interface IProductContext {
  product: ProductDetail | null;
  loading: boolean;
  error: boolean;
  fetchProduct: (productId: { productId: string }) => void;
}

const initialProductContext: IProductContext = {
  product: null,
  loading: false,
  error: false,
  fetchProduct: () => Promise.resolve(),
};

export const ProductContext = createContext<IProductContext>(initialProductContext);

interface ProductProviderProps {
  children: React.ReactNode;
}

function ProductProvider({ children }: ProductProviderProps) {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchProduct = useCallback(async ({ productId }: {productId: string}) => {
    setLoading(true);
    setError(false);

    try {
      const data = await apiService.fetchProduct({ productId });
      setProduct(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(() => ({
    product, loading, error, fetchProduct,
  }), [product, loading, error, fetchProduct]);

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export default ProductProvider;
