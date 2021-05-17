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
  goalschartArray=[];
  goalschart = 
    {
      "name": "",
      "value": 0
    }
  
  

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
      this.goalschart.value=goal.currentSavings;
      this.goalschartArray.push(this.goalschart)

    })
  }
}


