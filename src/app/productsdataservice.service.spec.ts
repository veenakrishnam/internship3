import { TestBed, inject } from '@angular/core/testing';

import { ProductsdataserviceService } from './productsdataservice.service';

describe('ProductsdataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsdataserviceService]
    });
  });

  it('should be created', inject([ProductsdataserviceService], (service: ProductsdataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
