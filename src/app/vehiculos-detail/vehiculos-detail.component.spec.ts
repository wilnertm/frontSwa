import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosDetailComponent } from './vehiculos-detail.component';

describe('VehiculosDetailComponent', () => {
  let component: VehiculosDetailComponent;
  let fixture: ComponentFixture<VehiculosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
