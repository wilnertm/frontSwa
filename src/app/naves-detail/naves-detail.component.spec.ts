import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesDetailComponent } from './naves-detail.component';

describe('NavesDetailComponent', () => {
  let component: NavesDetailComponent;
  let fixture: ComponentFixture<NavesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
