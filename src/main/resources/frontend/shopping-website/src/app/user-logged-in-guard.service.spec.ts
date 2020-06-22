import { TestBed } from '@angular/core/testing';

import { UserLoggedInGuardService } from './user-logged-in-guard.service';

describe('UserLoggedInGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLoggedInGuardService = TestBed.get(UserLoggedInGuardService);
    expect(service).toBeTruthy();
  });
});
