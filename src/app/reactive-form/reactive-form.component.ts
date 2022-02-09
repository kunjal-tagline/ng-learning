import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  public reactiveForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.createReactiveForm();
  }

  public createReactiveForm() {
    this.reactiveForm = new FormGroup({
      email: new FormControl(
        '',
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
      ),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.pattern('(?=.*[0-9])'),
      ]),
    });
  }
  public reactiveFormSubmit() {
    console.log('reactiveloginfoorm data :>> ', this.reactiveForm);
  }
}
