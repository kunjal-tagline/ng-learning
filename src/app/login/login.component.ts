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
  //public genders=['male', 'female'];
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
  }

  // public log(value:any){
  //   console.log('username :>> ', value);
  // }
}
