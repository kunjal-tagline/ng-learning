import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { emailRegEx } from '../shared/constant';
@Component({
  selector: 'app-relative',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  public genders: Array<any> = [
    {
      id: 'male',
      value: 'male',
    },
    {
      id: 'female',
      value: 'female',
    },
  ];
  public languages:Array<any> = [
    {
      id: 'Hindi',
      value: 'Hindi',
    },
    {
      id: 'Gujarati',
      value: 'Gujrati',
    },
    {
      id: 'English',
      value: 'English',
    },
  ];

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(emailRegEx),
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
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(10),
          ]),
        ],
        confirmpassword: ['', [Validators.required,]],
        gender: ['', [Validators.required]],
        select: ['', [Validators.required]],
        checkbox1: [false, Validators.requiredTrue],
        checkbox2: [false, Validators.requiredTrue],
      },
      { validator: this.pwdConfirming('password', 'confirmpassword') }
    );
  }

  public pwdConfirming(key: string, confirmationKey: string) {
    return (passwordgroup: FormGroup) => {
      const passwordInput = passwordgroup.controls[key];
      const confirmationInput = passwordgroup.controls[confirmationKey];
      return confirmationInput.setErrors(
        passwordInput.value !== confirmationInput.value
          ? { notEquivalent: true }
          : null
      );
    };
  }

  public resetTheForm(): void {
    this.reactiveForm.reset();
  }

  public onSubmitRegister(reactiveForm: any) {
    console.log('reactiveForm :>> ', reactiveForm);
  }
}
