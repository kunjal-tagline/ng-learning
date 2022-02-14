import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slicepipe',
  templateUrl: './slicepipe.component.html',
  styleUrls: ['./slicepipe.component.scss']
})
export class SlicepipeComponent implements OnInit {
  public sliceArray:Array<String>=['apple','bannana','cherry','Dargon fruit'];
  public sliceString:string='hello everyone welcome in pipe session';
  
  constructor() { }

  ngOnInit(): void {
  }

}
