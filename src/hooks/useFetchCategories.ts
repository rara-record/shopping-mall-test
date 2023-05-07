// TODO: 카테고리 목록 받아오기

import { container } from 'tsyringe';
import { useEffectOnce } from 'usehooks-ts';
import { useState } from 'react';
import CategoriesStore from '../stores/CategoriesStore';

const useFetchCategories = () => {
  const store = container.resolve(CategoriesStore);

  const [{ categories }] = useState(store);

  useEffectOnce(() => {
    store.fetchCategories();
  });

  return { categories };
};

export default useFetchCategories;
