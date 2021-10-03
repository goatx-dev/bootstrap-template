import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPluginsComponent } from './forms-plugins.component';

describe('FormsPluginsComponent', () => {
  let component: FormsPluginsComponent;
  let fixture: ComponentFixture<FormsPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsPluginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
