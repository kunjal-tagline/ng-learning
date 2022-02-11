import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempalte-driven',
  templateUrl: './tempalte-driven.component.html',
  styleUrls: ['./tempalte-driven.component.scss'],
})
export class TempalteDrivenComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  public loginUsers = {
    username: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  public loginFormSubmit(): void {
    this.loginUsers.username = this.loginForm.value.loginUsername;
    this.loginUsers.password = this.loginForm.value.loginPassword;
  }
}
