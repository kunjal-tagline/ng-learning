import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.scss']
})
export class DatepipeComponent implements OnInit {

public today:Date=new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
