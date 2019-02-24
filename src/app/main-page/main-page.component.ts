import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Observable } from 'rxjs';
import { State } from '../store';
import { Store } from '@ngrx/store';
import { AddItem, RemoveItem } from '../store/items/item.actions';

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

  }

  addItem(title: string) {
    this.store.dispatch(new AddItem(title));
  }

  removeItem(item: Item) {
    this.store.dispatch(new RemoveItem(item));
  }
}
