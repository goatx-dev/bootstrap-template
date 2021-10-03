import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsGoogleComponent } from './charts-google.component';

describe('ChartsGoogleComponent', () => {
  let component: ChartsGoogleComponent;
  let fixture: ComponentFixture<ChartsGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
