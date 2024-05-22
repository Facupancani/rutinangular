import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercise } from './exercises-list/Exercise';
import { tap } from 'rxjs';
const URL = 'https://664dba86ede9a2b556549ceb.mockapi.io/rutinangular/exercises';
@Injectable({
  providedIn: 'root'
})
export class ExercisesDataService {
  constructor(private http:HttpClient) {}
  getall(){
    return this.http.get<Exercise[]>(URL).pipe(tap((exercises:Exercise[])=>exercises.forEach(exercise => {exercise.reps=0; exercise.sets = 0})))
  }
}