// TODO: 상품 목록 받아오기

import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { useEffect } from 'react';
import ProductsStore from '../stores/ProductsStore';

const useFetchProducts = ({ categoryId }: {categoryId?: string}) => {
  const store = container.resolve(ProductsStore);
  const [{ products }] = useStore(store);

  useEffect(() => {
    store.fetchProducts({ categoryId });
  }, [categoryId, store]);

  return { products };
};

export default useFetchProducts;
