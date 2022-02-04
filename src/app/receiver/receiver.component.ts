import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss'],
})
export class ReceiverComponent implements OnInit {
  public receiveData: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData.subscribe((response) => {
      this.receiveData = response;
    });
  }
}
