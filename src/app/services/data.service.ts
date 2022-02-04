import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource$ = new BehaviorSubject<object>({ name: 'Manager here!!!' });
  getData = this.dataSource$.asObservable();
  constructor() {}

  setData(getData: any) {
    this.dataSource$.next(getData);
  }
}
