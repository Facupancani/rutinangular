import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinangularAboutComponent } from './rutinangular-about.component';

describe('RutinangularAboutComponent', () => {
  let component: RutinangularAboutComponent;
  let fixture: ComponentFixture<RutinangularAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RutinangularAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutinangularAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
