import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsKnobComponent } from './charts-knob.component';

describe('ChartsKnobComponent', () => {
  let component: ChartsKnobComponent;
  let fixture: ComponentFixture<ChartsKnobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsKnobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsKnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
