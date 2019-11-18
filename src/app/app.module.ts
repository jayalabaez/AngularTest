import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {TestComponent}  from './test/test.component';
import {PagingComponent} from './test/paging.component';


 @NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent , TestComponent , PagingComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
