import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesBAsicComponent } from './tables-basic.component';

describe('TablesBAsicComponent', () => {
  let component: TablesBAsicComponent;
  let fixture: ComponentFixture<TablesBAsicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesBAsicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesBAsicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
