import { ProductmainService } from './../productmain.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public products: any;

  constructor(private productmainService: ProductmainService) {
    this.products = productmainService.productData();
  }
  ngOnInit(): void {
    
  }

}
