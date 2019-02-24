import { ItemState } from './item.state';
import { ItemActionTypes, ItemActionUnion } from './item.actions';
import { Item } from '../../item.model';


const initialState: ItemState = {
  items: [],
};

export function itemReducer(state = initialState, action: ItemActionUnion): ItemState {
  switch (action.type) {
    case ItemActionTypes.AddItem:
      return {
        ...state,
        items: addItemWithTitle(state.items, action.title ),
      };
    case ItemActionTypes.RemoveItem:
      return {
        ...state,
        items: removeItem(state.items, action.item),
      };
    default:
      return state;
  }
}

function addItemWithTitle(items: Item[], title: string) {
  const id = getNextId(items);
  const newItem = {
    id, title
  };
  return [
    ...items,
    newItem,
  ];
}

function removeItem(items: Item[], toRemove: Item) {
  const index = items.indexOf(toRemove);
  const copyOfArray = [ ...items];
  copyOfArray.splice(index, 1);
  return copyOfArray;
}

function getNextId(items: Item[]) {
  let largestId = -1;
  items.forEach(item => {
    if (item.id > largestId) {
      largestId = item.id;
    }
  });
  return largestId + 1;
}
