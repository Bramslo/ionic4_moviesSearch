import { TestBed } from '@angular/core/testing';

import { ResultatrechercheService } from './resultatrecherche.service';

describe('ResultatrechercheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultatrechercheService = TestBed.get(ResultatrechercheService);
    expect(service).toBeTruthy();
  });
});
