import { TestBed, inject } from '@angular/core/testing';

import { VrGalDbService } from './vr-gal-db.service';

describe('VrGalDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VrGalDbService]
    });
  });

  it('should be created', inject([VrGalDbService], (service: VrGalDbService) => {
    expect(service).toBeTruthy();
  }));
});
