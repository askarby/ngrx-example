import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { STORAGE_TOKEN } from './tokens';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
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
