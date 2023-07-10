import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsDetailsComponent } from './complaints-details.component';

describe('ComplaintsDetailsComponent', () => {
  let component: ComplaintsDetailsComponent;
  let fixture: ComponentFixture<ComplaintsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintsDetailsComponent]
    });
    fixture = TestBed.createComponent(ComplaintsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
