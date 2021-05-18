import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GoalService } from 'src/app/services/goal.service';
import { Goal } from '../goal.component';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.css']
})
export class EditGoalComponent implements OnInit {

  currentGoal: any;
  message = '';
  submitted = false;

  constructor(
    private goalService: GoalService,
    private route: ActivatedRoute,
    private router: Router) { }


    ngOnInit(): void {
      this.message = '';
      this.getGoal(this.route.snapshot.paramMap.get('id'));
      console.log(this.currentGoal);
    }

    getGoal(id): void {
      console.log(id);
      this.goalService.getById(id)
        .subscribe(
          data => {
            this.currentGoal = data;
            console.log(data);
            console.log(this.currentGoal);
          },
          error => {
            console.log(error);
          }
        )
    };


    //currentGoal is currently not changing, it is not getting user input changes, causes the update button to
    //do nothing to the data entry. not knowing where to push my changes to a specific id.
    updateGoal(): void {
      this.goalService.update(this.currentGoal.goalId, this.currentGoal)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The goal has been updated!';
          },
          error => {
            console.log(error);
          }
        )
    };

  }