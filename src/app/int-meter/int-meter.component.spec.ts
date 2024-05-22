import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntMeterComponent } from './int-meter.component';

describe('IntMeterComponent', () => {
  let component: IntMeterComponent;
  let fixture: ComponentFixture<IntMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntMeterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
