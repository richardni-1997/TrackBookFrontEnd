import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalschartService  {
private baseUrl= 'http://localhost:8081/api/goals';
  constructor(private http: HttpClient) { }

  getGoals(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
    
  }

