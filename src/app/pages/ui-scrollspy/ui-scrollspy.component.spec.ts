import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiScrollspyComponent } from './ui-scrollspy.component';

describe('UiScrollspyComponent', () => {
  let component: UiScrollspyComponent;
  let fixture: ComponentFixture<UiScrollspyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiScrollspyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiScrollspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
