import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageHorizontalComponent } from './home-page-horizontal.component';

describe('HomePageHorizontalComponent', () => {
  let component: HomePageHorizontalComponent;
  let fixture: ComponentFixture<HomePageHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
