/**
 * contains the form, with input, submit button
 * adds new TODO to the array TODOs
 */

import {Component} from '@angular/core';
import {CounterService} from '../../services/counter.service';
import {TODO} from "../../models/todo";
import {Counter} from "../../models/counter";
import { MeterService } from '../../services/meter.service';

@Component({
  selector: 'mg-TODO-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TODOFormComponent {
  public TODOInput : string = '';
  public CounterInput : number = 0;
  constructor(private _CounterService : CounterService, private _MeterService: MeterService){
    this._MeterService.getAllTasks().subscribe(date => {
        debugger;
    });
  }

  public addCounter(frm){
    this._CounterService.addCounter({val:this.CounterInput, createDate: new Date()});
  }

}
