import { TestBed } from '@angular/core/testing';

import { JwtCommercial2Service } from './jwt-commercial2.service';

describe('JwtCommercial2Service', () => {
  let service: JwtCommercial2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtCommercial2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
