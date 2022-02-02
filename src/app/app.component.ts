import { Component } from '@angular/core';
import { ProductmainService } from './productmain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'practiceangular';
  public products: any;

  constructor(private productmainService: ProductmainService) {
    this.products = productmainService.productData();
  }

}
