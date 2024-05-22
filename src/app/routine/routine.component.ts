import { Component } from '@angular/core';
import { RoutineListService } from '../routine-list.service';
import { Exercise } from '../exercises-list/Exercise';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrl: './routine.component.scss'
})
export class RoutineComponent {
  routineList:Exercise[] = [];
  constructor(private routineListService:RoutineListService){
    routineListService.routine.subscribe(r=>this.routineList=r)
  }
  removeExercise(i:number){
    this.routineListService.remove(i);
  }
  
}
