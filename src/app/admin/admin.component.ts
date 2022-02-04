import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(public route: Router) {}
public name:string='kunjal';
public password :string= 'kunjal@password' ;
  ngOnInit(): void {}

  public loginAdmin(): void {
    this.route.navigate(['./adminlogin/admin-dashboard']);
  }
}
