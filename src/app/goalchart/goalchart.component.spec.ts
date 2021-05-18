import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalchartComponent } from './goalchart.component';

describe('GoalchartComponent', () => {
  let component: GoalchartComponent;
  let fixture: ComponentFixture<GoalchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
