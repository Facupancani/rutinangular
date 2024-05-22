import { Injectable } from '@angular/core';
import { Exercise } from './exercises-list/Exercise';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutineListService {
  private _routine:Exercise[] = [];
  routine:BehaviorSubject<Exercise[]> = new BehaviorSubject(this._routine);
  constructor(){}
  add(exercise:Exercise){
    this._routine.push(exercise);
    this.routine.next(this._routine);
  }
  remove(i:number){
    this._routine.splice(i,1);
  }
}
