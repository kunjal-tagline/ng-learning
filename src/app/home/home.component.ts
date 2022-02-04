import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable, Subscriber } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
 
  constructor(private router: Router) {}
  
  ngOnInit() {
    //observable
    const observable$ = new Observable((Subscriber) => {
      Subscriber.next(1);
      Subscriber.next(2);
      Subscriber.next(3);
      setTimeout(() => {
        Subscriber.next(4); // happens asynchronously
        Subscriber.complete();
      }, 1000);
    });

    observable$.subscribe({
      next(x) {
        console.log('value of next in homepage:>> ', x);
      },
      error(err) {
        console.error('error in homepage:>> ', err);
      },
      complete() {
        console.log('done');
      },
    });

    //custom interval observable
    const customIntervalObservable = new Observable((Subscriber) => {
      let count = 0;
      setInterval(() => {
        Subscriber.next(count);
        if (count > 3) {
          Subscriber.error('pip data is greter than 10!!!!!!!!');
        }
        count++;
      }, 4000);
    });
    //pip use for mapping
    // customIntervalObservable.pipe(map(data =>{
    //   return 'pip data:'+ (data*2);
    // }));

    customIntervalObservable
      .pipe(
        filter((data: any) => {
          return data > 0;
        }),
        map((data: any) => {
          return 'pip data:' + data * 2;
        })
      )
      .subscribe(
        (data) => {
          console.log('data of custom interval:>> ', data);
        } // , error => {
        //   alert(error.message);
        // }
      );
  }

  public onLoadLogin(): void {
    this.router.navigate(['login', 1, 'kunjal']);
  }
}
