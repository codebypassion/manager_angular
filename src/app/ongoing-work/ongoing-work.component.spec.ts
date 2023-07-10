import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { OngoingWorkComponent } from './ongoing-work.component';

describe('OngoingWorkComponent', () => {
  let component: OngoingWorkComponent;
  let fixture: ComponentFixture<OngoingWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],

      declarations: [OngoingWorkComponent]
    });
    fixture = TestBed.createComponent(OngoingWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
