import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.scss']
})
export class AsyncpipeComponent implements OnInit {
  public promise: Promise<string> | undefined;
  
  constructor() { 
    this.promise=this.getPromise();
  }

  ngOnInit(): void {
  }

  public time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  public newNumber = new Observable<number>((observer: Observer<number>) => {
    setInterval(() => observer.next(1234567890), 1000);
  });

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
 }
}
