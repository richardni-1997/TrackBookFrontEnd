import { Component, OnInit } from '@angular/core';
import { Goal } from '../model/goal';
import { GoalschartService } from '../services/goalschart.service';

@Component({
  selector: 'app-goalchart',
  templateUrl: './goalchart.component.html',
  styleUrls: ['./goalchart.component.css']
})
export class GoalchartComponent implements OnInit {

  goals: Goal[] = [];
  private subscription;
  goalsArray=[];
  goalschart = 
    {
      name: "",
      value: 0
    }
  
    goalsArray1=[{ name: 1, value: 0 }, { name: 2, value: 0 }, { name: 3, value: 0 }];

  constructor(private goalschartService: GoalschartService) { }

  ngOnInit(): void {
    this.goalschartService.getGoals().subscribe((data: any[])=> {
      this.goals = data;
      this.getGoalsChartData();
    })
  }

  getGoalsChartData() {

    this.goals.forEach((goal) => {

      this.goalschart.name =goal.name;
      console.log(this.goalschart.name);
      this.goalschart.value=goal.currentSavings;
      this.goalsArray.push(this.goalschart);

    })
  }
}


