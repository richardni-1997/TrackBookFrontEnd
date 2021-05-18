import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { GoalService } from './goal.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    let obsArray = [this.goalService.getAll()];
    return forkJoin(obsArray);
  }
  
  constructor(private goalService: GoalService) { }
<<<<<<< HEAD
}
=======
}
>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
