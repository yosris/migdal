/**
 * contains the form, with input, submit button
 * adds new TODO to the array TODOs
 */

import {Component} from '@angular/core';
import {TODOService} from '../../services/todo.service';
import {TODO} from "../../models/todo";

@Component({
  selector: 'mg-TODO-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TODOFormComponent {
  public TODOInput : string = '';//{description:'', completed: true};
  public someField: string = '';
  constructor(private _TODOService : TODOService){

  }

  public addTODO(name){
    this._TODOService.addTODO({description:this.TODOInput, completed: false});
    this.TODOInput = '';
    name.reset();
  }
}
