import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinangularHomeComponent } from './rutinangular-home.component';

describe('RutinangularHomeComponent', () => {
  let component: RutinangularHomeComponent;
  let fixture: ComponentFixture<RutinangularHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RutinangularHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutinangularHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
