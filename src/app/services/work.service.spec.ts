import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkService } from './work.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

describe('WorkService', () => {
  let service: WorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Add HttpClientModule to imports
      providers: [WorkService]
    });
    service = TestBed.inject(WorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
