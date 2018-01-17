/**
 * display the list of TODOs
 */

import {Component} from '@angular/core';
import {CounterService} from "../../services/counter.service";
import {TaskService} from "../../services/task.service";
import {TODO} from "../../models/todo";
import {Counter} from "../../models/counter";

@Component({
  selector: 'mg-TODO-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TODOListComponent{
  public Counters : Counter[] = [];

  constructor(private _CounterService : CounterService, private _TaskService : TaskService){
    this.Counters = _CounterService.getCounters();
    
    console.log('asas', this.Counters);
  }

  deleteItem(index : number) {
    this._CounterService.deleteTODO(index);
  }

}
