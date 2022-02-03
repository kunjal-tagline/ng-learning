import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  private firstSubscription!: Subscription;

  constructor(public route: Router) {}

  ngOnInit() {
    this.firstSubscription = interval(1000).subscribe((count) => {
      console.log('firstsubscription (contact page) :>> ', count);
    });
  }

  public loadEdit(): void {
    this.route.navigate(['./edit/start-edit']);
  }

  public loadManager(): void {
    this.route.navigate(['/manager']);
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }
}
