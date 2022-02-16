import { User } from './../interfaces/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  private postsurl = 'https://jsonplaceholder.typicode.com/posts';

  public todo$: any = new BehaviorSubject([]);
  /**
   * todoObs
   */
  public todoObs() {
    return this.todo$.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  public getdata(): Observable<User> {
    return this.httpClient.get<User>(this.postsurl);
  }

  //get data using behavior subject
  public gettingdata() {
    this.httpClient.get<User>(this.postsurl).subscribe((data) => {
      this.todo$.next(data);
    });
  }

  //post data
  public postUsers(postData: object): Observable<User> {
    return this.httpClient.post<User>(this.postsurl, postData);
  }
}
