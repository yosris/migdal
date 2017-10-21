import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { TODOModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule, TODOModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
