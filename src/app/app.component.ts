import { User } from './interfaces/user';
import { HttpclientService } from './services/httpclient.service';
import { Component, OnInit, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'routingpractical';
  public resultgetdata!: User;
  public usersdata: any = [];
  public postusersdata: any = [];

  public Users = {
    id: 101,
    title: 'hello this is my post',
  };
  constructor(private httpclientService: HttpclientService) {}

  ngOnInit() {
    //get data
    this.httpclientService.getdata().subscribe((resultgetdata) => {
      //console.log(resultgetdata);
      this.usersdata = resultgetdata;
    });

    //getting data using behaviour subject
    this.httpclientService.todoObs().subscribe((arg: any) => {
      //console.log('arg :>> ', arg);
      this.usersdata = arg;
    });

    //post users
    this.httpclientService.postUsers(this.Users).subscribe((post: any) => {
      console.log('post :>> ', post);
    });
  }

  //delete data
  public deleteOnclick(): void {
    this.httpclientService.deleteData(1).subscribe((deletearg: any) => {
      console.log('delelte :>> ', deletearg);
    });
  }
}
