import { TestBed } from '@angular/core/testing';

import { RoutineListService } from './routine-list.service';

describe('RoutineListService', () => {
  let service: RoutineListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutineListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
