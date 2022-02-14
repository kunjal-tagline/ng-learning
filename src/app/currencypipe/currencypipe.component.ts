import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-currencypipe',
  templateUrl: './currencypipe.component.html',
  styleUrls: ['./currencypipe.component.scss']
})
export class CurrencypipeComponent implements OnInit {

  public value:number=100000;
  public value2:number=123.456;
  public arrayValue=[1,2,3,4];
  
  constructor() { }

  ngOnInit(): void {
  }

}
