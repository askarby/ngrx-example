import { ActionReducerMap } from '@ngrx/store';
import { ItemState } from './items/item.state';
import { itemReducer } from './items/item.reducer';

export interface State {
  todolist: ItemState;
}

export const reducers: ActionReducerMap<State> = {
  todolist: itemReducer,
};
