import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMasksComponent } from './forms-masks.component';

describe('FormsMasksComponent', () => {
  let component: FormsMasksComponent;
  let fixture: ComponentFixture<FormsMasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsMasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsMasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
