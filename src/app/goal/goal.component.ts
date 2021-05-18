import { animate, state, style, transition, trigger } from '@angular/animations';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GoalService } from '../services/goal.service';
=======
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GoalService } from '../services/goal.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5

export interface Goal {
  goalId: number,
  email: string,
  name: string,
  description: string,
  startDate: Date,
  targetDate: Date,
  currentSavings: number,
  targetSavings: number,
  priority: string
}

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
<<<<<<< HEAD

export class GoalComponent implements OnInit {

  constructor(
    private goalService: GoalService) { }

=======

export class GoalComponent implements OnInit{

  constructor(
    private goalService: GoalService) { }

  @Output() valueChange: EventEmitter<string> = 
              new EventEmitter<string>();

  goalFilter: string;
>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
  message: string;
  currentGoal = null;
  expandedGoal: Goal | null;
  dataSource: MatTableDataSource<Goal>;
<<<<<<< HEAD
=======
  filteredGoals: MatTableDataSource<Goal>;

>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
  selectedGoal: MatTableDataSource<Goal>;

  goals: any;
  displayedColumns: string[] = ['goalid', 'email', 'name', 'description', 'start', 'target', 
                                'currentSavings', 'targetSavings', 'priority', 'select'];
<<<<<<< HEAD

  ngOnInit(): void {
    this.retrieveGoals();
  }

  retrieveGoals(): void {
    this.goalService.getAll()
      .subscribe(
        data => {
          this.goals = data;
          this.dataSource = new MatTableDataSource(this.goals);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

=======
  
  onValueChange(value: string): void {
    this.goalService.filterBy = value;
    this.filterBy(value);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.retrieveGoals();
  }

  resetList(): void {
    this.currentGoal = null;
    this.retrieveGoals();
  }
  retrieveGoals(): void {
    this.goalService.getAll()
      .subscribe(
        data => {
          this.goals = data;
          this.dataSource = new MatTableDataSource(this.goals);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
  setActiveGoal(goalId): void {
    this.goalService.getById(goalId)
      .subscribe(data => {
        this.currentGoal = data;
        this.selectedGoal = new MatTableDataSource(this.currentGoal);
        console.log(data);
        console.log(this.currentGoal);
        console.log(this.selectedGoal);
      },
      error => {
        console.log(error);
      })
  }

  deleteGoal(): void {
    this.goalService.delete(this.currentGoal.goalId)
      .subscribe(
        response => {
          console.log(response);
          this.message = "The goal has been deleted";
        },
        error => {
          console.log(error);
        }
      )};
<<<<<<< HEAD

}
=======
<<<<<<< HEAD
      private displayCurrentProgress(current, total){
        return Number(current / total) * 100 ;
      }

=======
      
  filterBy(filter?: string): void {
    if (filter){
      this.filteredGoals = this.goals.filter((goal: Goal) =>
           goal.email.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1);
    } else {
      this.filteredGoals = this.goals;
    }
  }
>>>>>>> e5c8ff90c059f0039fbda4eab50f13492f4d4e1f
}
>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
