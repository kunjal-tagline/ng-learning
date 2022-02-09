import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      username: new FormControl('kunjal'),
      password: new FormControl(null)
    })
  }
  public reactiveFormSubmit() {
    console.log('reactiveloginfoorm data :>> ', this.reactiveForm);
    }
  }

