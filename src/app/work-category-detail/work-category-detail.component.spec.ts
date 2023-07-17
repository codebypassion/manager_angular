import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCategoryDetailComponent } from './individual-details.component';

describe('WorkCategoryDetailComponent', () => {
  let component: WorkCategoryDetailComponent;
  let fixture: ComponentFixture<WorkCategoryDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkCategoryDetailComponent]
    });
    fixture = TestBed.createComponent(WorkCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
