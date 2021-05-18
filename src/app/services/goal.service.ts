import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8081/api/goals"

@Injectable({
  providedIn: 'root'
})

export class GoalService {

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

}


