import { TestBed } from '@angular/core/testing';

import { FarmerService } from './farmer.service';

describe('FarmerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerService = TestBed.get(FarmerService);
    expect(service).toBeTruthy();
  });
});
