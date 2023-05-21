import { TestBed } from '@angular/core/testing';

import { GlobalVariableService } from './global-variable.service';

describe('GlobalVariableService', () => {
  let service: GlobalVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
