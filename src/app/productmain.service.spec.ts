import { TestBed } from '@angular/core/testing';

import { ProductmainService } from './productmain.service';

describe('ProductmainService', () => {
  let service: ProductmainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductmainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
