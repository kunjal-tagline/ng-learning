import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductmainService {
  public productData() {
    return [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'mobile' },
      { id: 3, name: 'tv' },
    ];
  }

  constructor() {}
}
