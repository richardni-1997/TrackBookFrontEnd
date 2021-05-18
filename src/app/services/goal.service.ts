import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = "http://localhost:8081/api/goals"

@Injectable({
  providedIn: 'root'
})

export class GoalService {
  private baseUrl = 'http://localhost:8081/api/goals';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  get(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createGoal(data): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateGoal(id,data): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.delete(`${this.baseUrl}`);
  }

  getById(goalId): Observable<any> {
    return this.http.get(`${baseUrl}/${goalId}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(goalId, data): Observable<any> {
    return this.http.put(`${baseUrl}/${goalId}`, data);
  }

}