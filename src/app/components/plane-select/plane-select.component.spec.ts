import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneSelectComponent } from './plane-select.component';

describe('PlaneSelectComponent', () => {
  let component: PlaneSelectComponent;
  let fixture: ComponentFixture<PlaneSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
