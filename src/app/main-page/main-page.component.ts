import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Item } from '../item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.items$ = this.storage.load();
  }

  saveItems(items: Item[]) {
    this.storage.save(items);
  }
}
