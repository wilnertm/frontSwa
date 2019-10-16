import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciesDetailComponent } from './especies-detail.component';

describe('EspeciesDetailComponent', () => {
  let component: EspeciesDetailComponent;
  let fixture: ComponentFixture<EspeciesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspeciesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
