import { Component, OnInit } from '@angular/core';
import { Exercise } from './Exercise';
import { RoutineListService } from '../routine-list.service';
import { ExercisesDataService } from '../exercises-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrl: './exercises-list.component.scss'
})
export class ExercisesListComponent implements OnInit{
  exercises$:Observable< Exercise[]>;
  
  constructor(
    private routineListService:RoutineListService,
    private exercisesDataService:ExercisesDataService
  ){
    this.exercises$ =exercisesDataService.getall();
  }
  ngOnInit(){
  }
  addExercise(exercise:Exercise){
    if(exercise.sets > 0 && exercise.reps > 0){
      this.routineListService.add({...exercise});
    }
  }
  
}
