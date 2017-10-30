/**
 * TODO module
 */

import {NgModule} from '@angular/core';
// import * as services from '...';
import {TODOService} from './services/todo.service';
import {TaskService} from './services/task.service';
import {TODOFormComponent} from './components/todo-form/todo-form.component';
import {TODOListComponent} from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

@NgModule({
  providers: [TODOService, TaskService],
  declarations: [TODOFormComponent, TODOListComponent],
  exports: [TODOFormComponent, TODOListComponent],
  imports: [FormsModule, CommonModule, HttpModule]
})
export class TODOModule{

}
