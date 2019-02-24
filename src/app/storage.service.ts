import { Inject, Injectable } from '@angular/core';
import { STORAGE_TOKEN } from './tokens';
import { Item } from './item.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const STORAGE_KEY = 'items';
const DELAY_IN_MS = 1000;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(STORAGE_TOKEN) private storage: Storage) {
  }

  load(): Observable<Item[]> {
    const value = this.storage.getItem(STORAGE_KEY);
    return of(value ? JSON.parse(value) : []).pipe(delay(DELAY_IN_MS));
  }

  save(items: Item[]): Observable<Item[]> {
    this.storage.setItem(STORAGE_KEY, JSON.stringify(items));
    return of(items).pipe(delay(DELAY_IN_MS));
  }
}
