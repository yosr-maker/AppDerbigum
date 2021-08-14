import { TestBed } from '@angular/core/testing';

import { JwtCommercialService } from './jwt-commercial.service';

describe('JwtCommercialService', () => {
  let service: JwtCommercialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtCommercialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
