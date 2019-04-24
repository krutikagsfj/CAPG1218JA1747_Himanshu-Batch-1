import { TestBed } from '@angular/core/testing';

import { DataSerService } from './data-ser.service';

describe('DataSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSerService = TestBed.get(DataSerService);
    expect(service).toBeTruthy();
  });
});
