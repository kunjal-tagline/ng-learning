import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonpipe',
  templateUrl: './jsonpipe.component.html',
  styleUrls: ['./jsonpipe.component.scss']
})
export class JsonpipeComponent implements OnInit {
public food:object ={
  food1: 'pizza',
  food2:'sandwitch',
  totalfruits:{
    fruit1:'apple',
    fruitsArray:['pinapple','orange','strawbarry','kiwi']
  }
};
  constructor() { }

  ngOnInit(): void {
  }

}
