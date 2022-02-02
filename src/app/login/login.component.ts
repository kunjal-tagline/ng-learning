import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const ID = this.route.snapshot.paramMap.get('id');
    console.log('ID :>> ', ID);
    const NAME = this.route.snapshot.paramMap.get('name');
    console.log('NAME :>> ', NAME);

    // this.route.params.subscribe(id => console.log('id :>> ', id))
    // const id = this.route.snapshot.params;
    // console.log('id-outside :>> ', id);
  }
}
