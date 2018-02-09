import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMontySceneComponent } from './full-monty-scene.component';

describe('FullMontySceneComponent', () => {
  let component: FullMontySceneComponent;
  let fixture: ComponentFixture<FullMontySceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullMontySceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMontySceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
