import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public route: Router) {}

  ngOnInit(): void {}

  public loadEdit() {
    this.route.navigate(['./edit/start-edit']);
  }

  public loadManager() {
    this.route.navigate(['/manager']);
  }
}
