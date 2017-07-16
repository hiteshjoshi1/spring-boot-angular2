import { TestBed, async, inject } from '@angular/core/testing';

import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes.guard';

describe('PreventUnsavedChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventUnsavedChangesGuard]
    });
  });

  it('should ...', inject([PreventUnsavedChangesGuard], (guard: PreventUnsavedChangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
