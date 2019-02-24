import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ItemActionTypes, ItemsLoaded, ItemsSaved } from './item.actions';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { getItems } from './item.selector';
import { State } from '../index';
import { StorageService } from '../../storage.service';

@Injectable()
export class ItemEffects {

  @Effect()
  persistItem$ = this.actions$.pipe(
    ofType(ItemActionTypes.AddItem, ItemActionTypes.RemoveItem),
    withLatestFrom(this.store.pipe(select(getItems))),
    mergeMap((actionAndItems) => {
      const items = actionAndItems[1];
      return this.storageService.save(items).pipe(map(saved => new ItemsSaved(saved)));
    })
  );

  @Effect()
  loadItems$ = this.actions$.pipe(
    ofType(ItemActionTypes.LoadItems),
    mergeMap(() => {
      return this.storageService.load().pipe(map(loaded => new ItemsLoaded(loaded)));
    })
  );

  constructor(private actions$: Actions,
              private store: Store<State>,
              private storageService: StorageService) {}
}
