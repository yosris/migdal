import {Http, Response} from "@angular/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import { Counter } from "../models/counter";

@Injectable()
export class MeterService{
    constructor(private _http : Http){
        
    }

    getAllTasks() : Observable<Counter[]> {
        //const serverObservable = this._http.get(`http://localhost:50408/api/Counter`);
        return this._http.get('http://localhost:50408/api/Counter')
      .map(res => { 
        return res.json().results.map(item => { 
            debugger;
        })
      });
    }

    // postAllCounters(arrCounters: Array<Counter>) : Observable<boolean>{
        
    // }
}