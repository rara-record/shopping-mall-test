// TODO: 카테고리 목록을 관리하는 Store

import { Action, Store } from 'usestore-ts';
import { singleton } from 'tsyringe';
import { apiService } from '../services/ApiService';
import { Category } from '../types';

@singleton()
@Store()
export default class CategoriesStore {
  categories: Category[] = [];

  async fetchCategories() {
    this.setCategory([]);

    const categories = await apiService.fetchCategories();

    this.setCategory(categories);
  }

  @Action()
  setCategory(categories: Category[]) {
    this.categories = categories;
  }
}
