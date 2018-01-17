/**
 * TODO module
 */

import {NgModule} from '@angular/core';
// import * as services from '...';
import {CounterService} from './services/counter.service';
import {TaskService} from './services/task.service';
import {TODOFormComponent} from './components/todo-form/todo-form.component';
import {TODOListComponent} from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {ReversePipe} from './pipes/reverse.pipe';


@NgModule({
  providers: [CounterService, TaskService],
  declarations: [TODOFormComponent, TODOListComponent, ReversePipe],
  exports: [TODOFormComponent, TODOListComponent, ReversePipe],
  imports: [FormsModule, CommonModule, HttpModule]
})
export class TODOModule{

}
