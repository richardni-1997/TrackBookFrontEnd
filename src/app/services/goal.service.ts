import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class GoalService {
  

  getById(goalId: any) {
    return this.http.get(`${this.baseUrl}/${goalId}`);
  }
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

  update(id,data): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.delete(`${this.baseUrl}`);
  }

 
<<<<<<< HEAD
=======
=======
  constructor(private http: HttpClient) { }

  filterBy: string;

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
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

  delete(goalId): Observable<any> {
    return this.http.delete(`${baseUrl}/${goalId}`);
  }

>>>>>>> 40f9c88796efd95c1d6cac9628a7f29d088e37eb
>>>>>>> e5c8ff90c059f0039fbda4eab50f13492f4d4e1f
}
