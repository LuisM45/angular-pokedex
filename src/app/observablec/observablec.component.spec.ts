import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablecComponent } from './observablec.component';

describe('ObservablecComponent', () => {
  let component: ObservablecComponent;
  let fixture: ComponentFixture<ObservablecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
