import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8081/api/goals"
=======
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

<<<<<<< HEAD
const baseUrl = "http://localhost:8081/api/goals"
=======

>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
>>>>>>> 08e9de3d425df117237f52760960d16b5d59b2cd

@Injectable({
  providedIn: 'root'
})

export class GoalService {
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
  

  getById(goalId: any) {
    return this.http.get(`${this.baseUrl}/${goalId}`);
  }
>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
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

<<<<<<< HEAD
  updateGoal(id,data): Observable<any> {
=======
  update(id,data): Observable<any> {
>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
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
 
<<<<<<< HEAD
=======
=======
>>>>>>> 08e9de3d425df117237f52760960d16b5d59b2cd
  constructor(private http: HttpClient) { }

  filterBy: string;

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
  getById(goalId): Observable<any> {
    return this.http.get(`${baseUrl}/${goalId}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(goalId, data): Observable<any> {
    return this.http.put(`${baseUrl}/${goalId}`, data);
  }
<<<<<<< HEAD

}
=======

  delete(goalId): Observable<any> {
    return this.http.delete(`${baseUrl}/${goalId}`);
  }

<<<<<<< HEAD
}


=======
>>>>>>> 40f9c88796efd95c1d6cac9628a7f29d088e37eb
>>>>>>> e5c8ff90c059f0039fbda4eab50f13492f4d4e1f
}
>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
>>>>>>> 08e9de3d425df117237f52760960d16b5d59b2cd
