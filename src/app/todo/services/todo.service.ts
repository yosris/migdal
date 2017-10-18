/**
 * TODO service
 * contains the array of TODOs
 * get the TODOs array and push new item to the array
 */

import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {TODO} from "../models/todo";

@Injectable()
export class TODOService{
  public TODOsSubject : Subject<TODO[]> = new Subject();
  private _TODOs : TODO[] = [{description: 'sleep', completed: false}, {description: 'eat', completed: true}];

  public addTODO(todo : TODO) : void {
    this._TODOs.push(todo);
    //this.TODOsSubject.next(this._TODOs);
  }

  public getTODOs() : TODO[] {
    return this._TODOs;
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
