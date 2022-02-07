import { confirmComponent } from './../guard/auth.guard';
import { AuthserviceService } from './../services/authservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, confirmComponent {
  constructor(public route: Router, public authservice: AuthserviceService) {}
  ngOnInit(): void {}
  public checkCredincial(adminname: string, password: string) {
    var entervalue = this.authservice.login(adminname, password);
    if (entervalue == true) {
      this.route.navigate(['./adminlogin/admin-dashboard']);
    } else {
      alert('you can not view admin dashboard!!!!');
    }
  }

  public confirm() {
    return confirm('Are you sure you want to leave this page?');
  }
}
