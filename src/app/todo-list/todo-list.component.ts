import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input()
  items: Item[];

  @Output()
  itemAdded: EventEmitter<string>;

  @Output()
  itemRemoved: EventEmitter<Item>;

  constructor() {
    this.items = [];
    this.itemAdded = new EventEmitter<string>();
    this.itemRemoved = new EventEmitter<Item>();
  }

  addItem(title: string) {
    this.itemAdded.emit(title);
  }

  removeItem(item: Item) {
    this.itemRemoved.emit(item);
  }

  id(index: number, item: Item) {
    return item.id;
  }
}
