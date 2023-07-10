import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkApplicationComponent } from './work-application.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { MatIconModule } from '@angular/material/icon';

describe('WorkApplicationComponent', () => {
  let component: WorkApplicationComponent;
  let fixture: ComponentFixture<WorkApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkApplicationComponent],
      imports: [MatIconModule, HttpClientTestingModule,FormsModule] // Add HttpClientTestingModule to imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
