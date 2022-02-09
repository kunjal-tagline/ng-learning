import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') form: NgForm | undefined;
  // public genders=['male', 'female'];
  // selectedgender='female';
  public user= { email: '', username: '', password: ''};
  showLoginData: boolean=false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // const ID = this.route.snapshot.paramMap.get('id');
    // console.log('ID :>> ', ID);
    // const NAME = this.route.snapshot.paramMap.get('name');
    // console.log('NAME :>> ', NAME);

    // this.route.params.subscribe(id => console.log('id :>> ', id))
    // const id = this.route.snapshot.params;
    // console.log('id-outside :>> ', id);
  }

  public onSubmit(){
    console.log('Form :>> ',this.form);
    this.user.email=this.form?.value.email;
    this.user.username=this.form?.value.logindata.username;
    this.user.password=this.form?.value.logindata.password;
    this.showLoginData=true;
  }

  // public log(value:any){
  //   console.log('username :>> ', value);
  // }
}
