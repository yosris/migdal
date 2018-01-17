/**
 * TODO service
 * contains the array of TODOs
 * get the TODOs array and push new item to the array
 */

import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {TODO} from "../models/todo";
import {Counter} from "../models/counter";

@Injectable()
export class CounterService{
  public TODOsSubject : Subject<TODO[]> = new Subject();
  private _TODOs : TODO[] = [{description: 'sleep', completed: false}, {description: 'eat', completed: true}];
  private _Counters : Counter[] = [];

  public addTODO(todo : TODO) : void {
    this._TODOs.push(todo);
    //this.TODOsSubject.next(this._TODOs);
  }

  public addCounter(counter : Counter) : void {
    this._Counters.push(counter);
  }

  public getTODOs() : TODO[] {
    return this._TODOs;
  }

  public getCounters() : Counter[] {
    return this._Counters;
  }

  public deleteTODO(index : number) {
    const newTODOs : TODO[] = [];
    for(let i=0; i<this._TODOs.length; i++) {
      if(i === index)continue;
      newTODOs.push(this._TODOs[i]);
    }
    this._TODOs = newTODOs;
    this.TODOsSubject.next(this._TODOs);
  }
}
