import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['Some initial item', 'Another item', "and one more"]);
  goal = this.goals.asObservable();
  
  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
