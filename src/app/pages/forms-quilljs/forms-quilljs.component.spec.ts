import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsQuilljsComponent } from './forms-quilljs.component';

describe('FormsQuilljsComponent', () => {
  let component: FormsQuilljsComponent;
  let fixture: ComponentFixture<FormsQuilljsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsQuilljsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsQuilljsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
