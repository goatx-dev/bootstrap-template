import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecordTemplateComponent } from './add-record-template.component';

describe('AddRecordTemplateComponent', () => {
  let component: AddRecordTemplateComponent;
  let fixture: ComponentFixture<AddRecordTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecordTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecordTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
