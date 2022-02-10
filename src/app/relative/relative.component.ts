import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.scss'],
})
export class RelativeComponent implements OnInit {
  reactiveForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    gender: new FormControl(''),
    select: new FormControl(''),
    checkbox1: new FormControl(''),
    checkbox2: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  constructor(private formBuilder: FormBuilder) {}
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(this.emailRegEx),
          ]),
        ],
        username: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ]),
        ],
        password: new FormControl (
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(10),
          ]),
        ),
        confirmpassword: ['', Validators.required],
        gender: ['', [Validators.required]],
        select: ['', [Validators.required]],
        checkbox1: [false, Validators.requiredTrue],
        checkbox2: [false, Validators.requiredTrue],
      // },
      // {
      //   validators: this.password.bind(this),
      
      });
  }

  public onSubmitRegister(reactiveForm: any) {
    console.log('reactiveForm :>> ', reactiveForm);
  }

  // public password(reactiveForm: FormGroup) {
  //   const { value: password } = reactiveForm.get('password');
  //   const { value: confirmpassword } = reactiveForm.get('confirmpassword');
  //   return password === confirmpassword ? null : { passwordNotMatch: true };
  // }
}
