import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCategoryComponent } from './individual.component';

describe('WorkCategoryComponent', () => {
  let component: WorkCategoryComponent;
  let fixture: ComponentFixture<WorkCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkCategoryComponent]
    });
    fixture = TestBed.createComponent(WorkCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
