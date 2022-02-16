import { User } from './interfaces/user';
import { HttpclientService } from './services/httpclient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'routingpractical';
  public resultgetdata!: User;
  public usersdata: any = [];

  constructor(private httpclientService: HttpclientService) {}

  ngOnInit() {
    //get data
    this.httpclientService.getdata().subscribe((resultgetdata) => {
      //console.log(resultgetdata);
      this.usersdata = resultgetdata;
    });

    //getting data using behaviour subject
    this.httpclientService.getdata();
    this.httpclientService.todoObs().subscribe((arg: any) => {
      //console.log('arg :>> ', arg);
      this.usersdata = arg;
    });
  }
}
