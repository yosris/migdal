import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { TODOModule } from './todo/todo.module';
import { PakaComponent } from './paka/paka.component';

@NgModule({
  declarations: [
    AppComponent,
    PakaComponent
  ],
  imports: [
    BrowserModule, TODOModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
