import { TestBed } from '@angular/core/testing';

import { ExercisesDataService } from './exercises-data.service';

describe('ExercisesDataService', () => {
  let service: ExercisesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExercisesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
