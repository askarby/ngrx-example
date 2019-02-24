import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemState } from './item.state';

const getTodolistFeature = createFeatureSelector<ItemState>('todolist');

export const getItems = createSelector(
  getTodolistFeature,
  itemState => itemState.items,
);
