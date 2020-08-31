import { TestBed } from '@angular/core/testing';

import { RepoNameService } from './repo-name.service';

describe('RepoNameService', () => {
  let service: RepoNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
