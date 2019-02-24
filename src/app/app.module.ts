import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { STORAGE_TOKEN } from './tokens';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './store/items/item.effects';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ItemEffects])
  ],
  providers: [
    {
      provide: STORAGE_TOKEN,
      useValue: window.localStorage,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
