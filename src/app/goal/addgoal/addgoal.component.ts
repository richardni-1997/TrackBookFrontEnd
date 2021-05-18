import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';
//import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-addgoal',
  templateUrl: './addgoal.component.html',
  styleUrls: ['./addgoal.component.css']
})
export class AddgoalComponent implements OnInit {

  private subscription;
  //for checking if an goal has been submitted
  submitted = false;
  goal = {
    email:null,
    name:null,
    description:null,
    startDate: null,
    targetDate: null,
    targetSavings: 0,
    currentSavings: 0,
    priority:null
  }
 error: boolean=false;
  
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('',[Validators.required]);
  description= new FormControl('',[Validators.required]);
  startDate= new FormControl('',[Validators.required]);
  targetDate = new FormControl('',[Validators.required]);
  currentSavings = new FormControl('',[Validators.required]);
  targetSavings = new FormControl('',[Validators.required]);
  priority=new FormControl('',[Validators.required]);
  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    
    
  }

 
//Add new goal
  saveGoal(): void {
      
     const data = {
      email: this.goal.email,
      name: this.goal.name,
      description: this.goal.description,
      startDate: this.goal.startDate,
      targetDate: this.goal.targetDate,
      currentSavings: this.goal.currentSavings,
      targetSavings: this.goal.targetSavings,
      priority: this.goal.priority

      
    };
    if (!this.error){
    this.goalService.createGoal(data)
      .subscribe(response => {
        
        //console.log(response); 
         this.submitted = true;
       }); 
      //  error => {
      //    console.log(error);
      //  });
  }
}

  newGoal(): void {
    this.submitted = false;
    this.goal = {
      email:'',
      name:'',
      description:'',
      startDate: null,
      targetDate: null,
      currentSavings: 0,
      targetSavings: 0,
      priority:''
    };
  }

  getErrorEmail() {
      this.error=true;
      if (this.email.hasError('required')) {
        
        return 'Email is required';
      }

    return this.email.hasError('email')  ? 'Not a valid email' : '';
    
  }
  getErrorName() {
    
    if (this.name.hasError('required')) {
  
      return 'Name is required';
    }
  }

  getErrorDesc(){
    
    if (this.description.hasError('required') ){
      
      return 'Description is required';
  }
  return this.description.hasError('description')  ? 'Not a valid description' : '';
  }

  getErrorStartDate(){
    if (this.startDate.hasError('required') ){
      
      return 'startDate is required';
  }
  return this.startDate.hasError('startDate')  ? 'Not a valid start date' : '';
  }

  getErrortargettDate(){
    if (this.targetDate.hasError('required') ){
      
      return 'targetDate is required';
  }
  if (this.goal.startDate > this.goal.targetDate)
  return this.targetDate.hasError('targetDate')  ? 'Not a valid target date, must be after than start date' : '';
  }

  getErrorCurrentSavings(){
    if (this.currentSavings.hasError('required') ){
           return 'Current Savings is required';
  }
  }
  getErrorTargetSavings(){
    if (this.targetSavings.hasError('required') ){
      
      return 'Target Savings is required';
  }
  if (this.goal.targetSavings>=this.goal.currentSavings){
    return this.targetSavings.hasError('targetDate')  ? 'Target savings amount must be less than current savings' : '';
  }

  }
  gerErrorPriority(){
    if (this.priority.hasError('required') ){
      
      return 'Priority is required';
  }
  return this.priority.hasError('targetDate')  ? 'Not a valid priority' : '';
  }
}