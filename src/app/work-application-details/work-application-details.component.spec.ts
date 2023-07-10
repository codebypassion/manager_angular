import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkApplicationDetailsComponent } from './work-application-details.component';

describe('WorkApplicationDetailsComponent', () => {
  let component: WorkApplicationDetailsComponent;
  let fixture: ComponentFixture<WorkApplicationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkApplicationDetailsComponent]
    });
    fixture = TestBed.createComponent(WorkApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
