import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { ComplaintsComponent } from './complaints.component';

describe('ComplaintsComponent', () => {
  let component: ComplaintsComponent;
  let fixture: ComponentFixture<ComplaintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],

      declarations: [ComplaintsComponent]
    });
    fixture = TestBed.createComponent(ComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
