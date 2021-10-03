import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsSparklineComponent } from './charts-sparkline.component';

describe('ChartsSparklineComponent', () => {
  let component: ChartsSparklineComponent;
  let fixture: ComponentFixture<ChartsSparklineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsSparklineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsSparklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
