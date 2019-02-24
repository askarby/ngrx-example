import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Observable } from 'rxjs';
import { State } from '../store';
import { select, Store } from '@ngrx/store';
import { AddItem, LoadItems, RemoveItem } from '../store/items/item.actions';
import { getItems } from '../store/items/item.selector';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.items$ = this.store.pipe(select(getItems));
    this.store.dispatch(new LoadItems());
  }

  addItem(title: string) {
    this.store.dispatch(new AddItem(title));
  }

  removeItem(item: Item) {
    this.store.dispatch(new RemoveItem(item));
  }
}
