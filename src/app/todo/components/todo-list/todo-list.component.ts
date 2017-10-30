/**
 * display the list of TODOs
 */

import {Component} from '@angular/core';
import {TODOService} from "../../services/todo.service";
import {TaskService} from "../../services/task.service";
import {TODO} from "../../models/todo";

@Component({
  selector: 'mg-TODO-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TODOListComponent{
  public TODOs : TODO[] = [];

  constructor(private _TODOService : TODOService, private _TaskService : TaskService){
    this.TODOs = _TODOService.getTODOs();
    //_TaskService.getAllTasks().subscribe((todos : TODO[]) => {
    //  this.TODOs = todos;
    //})
    console.log('asas', this.TODOs);
  }

  deleteItem(index : number) {
    this._TODOService.deleteTODO(index);
  }

  toggleCompletion(indx : number){
  this.TODOs[indx].completed = !this.TODOs[indx].completed;
  }
}
