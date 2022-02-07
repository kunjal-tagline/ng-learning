import { AuthGuard } from './../guard/auth.guard';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(public route: Router) {}

  logout() {
    localStorage.clear();
    this.route.navigate(['admin']);
  }

  login(adminname: string, password: string) {
    if (adminname === 'kunjal' && password === 'admin123') {
      localStorage.setItem('adminname', 'kunjal');
      localStorage.setItem('password', 'admin123');
      return true;
    } else {
      return alert(new Error('Failed to login'));
    }
  }
}
