import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingWorkDetailsComponent } from './ongoing-work-details.component';

describe('OngoingWorkDetailsComponent', () => {
  let component: OngoingWorkDetailsComponent;
  let fixture: ComponentFixture<OngoingWorkDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OngoingWorkDetailsComponent]
    });
    fixture = TestBed.createComponent(OngoingWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
