import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasDetailComponent } from './peliculas-detail.component';

describe('PeliculasDetailComponent', () => {
  let component: PeliculasDetailComponent;
  let fixture: ComponentFixture<PeliculasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
