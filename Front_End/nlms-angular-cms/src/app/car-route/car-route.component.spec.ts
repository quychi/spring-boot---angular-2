import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRouteComponent } from './car-route.component';

describe('CarRouteComponent', () => {
  let component: CarRouteComponent;
  let fixture: ComponentFixture<CarRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
