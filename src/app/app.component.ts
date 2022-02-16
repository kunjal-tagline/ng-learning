
import { HttpclientService } from './services/httpclient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'routingpractical';
  public resultgetdata: any;
  public usersdata: any = [];

  constructor(private httpclientService: HttpclientService) {}

  ngOnInit() {
    this.httpclientService.getPosts().subscribe((resultgetdata) => {
      //console.log(resultgetdata);
      this.usersdata = resultgetdata;
    });
  }
}
