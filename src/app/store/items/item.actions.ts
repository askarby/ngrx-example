import { Action } from '@ngrx/store';
import { Item } from '../../item.model';

export enum ItemActionTypes {
  AddItem = '[item] Add Todo-list item',
  RemoveItem = '[item] Remove Todo-list item',
  ItemsSaved = '[item] Todo-list items saved',
}

export class AddItem implements Action {
  readonly type = ItemActionTypes.AddItem;

  constructor(public title: string) {
  }
}

export class RemoveItem implements Action {
  readonly type = ItemActionTypes.RemoveItem;

  constructor(public item: Item) {
  }
}

export class ItemsSaved implements Action {
  readonly type = ItemActionTypes.ItemsSaved;

  constructor(public items: Item[]) {
  }
}


export type ItemActionUnion = AddItem | RemoveItem | ItemsSaved;
