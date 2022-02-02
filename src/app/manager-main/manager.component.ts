import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  public managerFirst() {
    this.route.navigate(['/manager1'], { queryParams: { name: 'M1' } });
  }
}
