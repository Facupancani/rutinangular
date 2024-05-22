import { Component, OnInit } from '@angular/core';
import { Exercise } from './Exercise';
import { RoutineListService } from '../routine-list.service';
import { ExercisesDataService } from '../exercises-data.service';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrl: './exercises-list.component.scss'
})
export class ExercisesListComponent implements OnInit{
  exercises:Exercise[] = []
  constructor(
    private routineListService:RoutineListService,
    private exercisesDataService:ExercisesDataService
  ){
    
  }
  ngOnInit(){
    this.exercisesDataService.getall().subscribe(e=>{this.exercises=e});
  }
  addExercise(exercise:Exercise){
    if(exercise.sets > 0 && exercise.reps > 0){
      this.routineListService.add({...exercise});
    }
  }
}
