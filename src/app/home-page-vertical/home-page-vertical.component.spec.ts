import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageVerticalComponent } from './home-page-vertical.component';

describe('HomePageVerticalComponent', () => {
  let component: HomePageVerticalComponent;
  let fixture: ComponentFixture<HomePageVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
