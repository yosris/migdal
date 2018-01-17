/**
 * contains the form, with input, submit button
 * adds new TODO to the array TODOs
 */

import {Component} from '@angular/core';
import {CounterService} from '../../services/counter.service';
import {TODO} from "../../models/todo";
import {Counter} from "../../models/counter";

@Component({
  selector: 'mg-TODO-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TODOFormComponent {
  public TODOInput : string = '';
  public CounterInput : number = 0;

  constructor(private _CounterService : CounterService){

  }

  public addCounter(counter){
    this._CounterService.addCounter({val:this.CounterInput, createDate: new Date()});
  }
}
