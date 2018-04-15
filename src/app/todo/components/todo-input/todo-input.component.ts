/**
 * contains the form, with input, submit button
 * adds new TODO to the array TODOs
 */

import {Component, Input, EventEmitter, Output} from '@angular/core';
import {CounterService} from '../../services/counter.service';
import {TODO} from "../../models/todo";
import {Counter} from "../../models/counter";
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'mg-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TODOInputComponent {
  public dotoInputField: string = '';

  @Output('update') 
  onchange: EventEmitter<Boolean> = new EventEmitter(false);

  formInChild: FormGroup;

  constructor(private _CounterService : CounterService){
    //this.formInChild = fb.group
    
  }

  todoInputChanged($event) {
      var isValid = $event.target.className.indexOf('invalid') < 0;
    console.log(isValid);
    this.onchange.emit(isValid);
  }

}
