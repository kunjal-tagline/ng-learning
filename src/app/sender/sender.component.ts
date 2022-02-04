import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss'],
})
export class SenderComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  public setDataByuser(value: any) {
    this.dataService.setData({ name: value });
  }
}
