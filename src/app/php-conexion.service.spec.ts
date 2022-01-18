import { TestBed } from '@angular/core/testing';

import { PhpConexionService } from './php-conexion.service';

describe('PhpConexionService', () => {
  let service: PhpConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpConexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
