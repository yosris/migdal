/**
 * TODO module
 */

import {NgModule} from '@angular/core';
// import * as services from '...';
import {CounterService} from './services/counter.service';
import {TaskService} from './services/task.service';
import {TODOFormComponent} from './components/todo-form/todo-form.component';
import {TODOListComponent} from './components/todo-list/todo-list.component';
import {TODOInputComponent} from './components/todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {ReversePipe} from './pipes/reverse.pipe';
import { MeterService } from './services/meter.service';


@NgModule({
  providers: [CounterService, TaskService, MeterService],
  declarations: [TODOFormComponent, TODOListComponent, TODOInputComponent, ReversePipe],
  exports: [TODOFormComponent, TODOListComponent, ReversePipe, TODOInputComponent],
  imports: [FormsModule, CommonModule, HttpModule]
})
export class TODOModule{

}
