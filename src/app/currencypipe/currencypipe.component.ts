import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-currencypipe',
  templateUrl: './currencypipe.component.html',
  styleUrls: ['./currencypipe.component.scss']
})
export class CurrencypipeComponent implements OnInit {

  public value:number=100000;
  public value2:number=123.456;
  public arrayvalue:Array<number>=[100,345,123,90];
  constructor() { }

  ngOnInit(): void {
  }

}
