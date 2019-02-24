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
  itemsChange: EventEmitter<Item[]>;

  constructor() {
    this.items = [];
    this.itemsChange = new EventEmitter<Item[]>();
  }

  addItem(title: string) {
    this.items.push({
      id: this.getNextId(),
      title
    });
    this.itemsChange.emit(this.items);
  }

  removeItem(id: number) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
    this.itemsChange.emit(this.items);
  }

  id(index: number, item: Item) {
    return item.id;
  }

  private getNextId() {
    let largestId = -1;
    this.items.forEach(item => {
      if (item.id > largestId) {
        largestId = item.id;
      }
    });
    return largestId + 1;
  }
}
