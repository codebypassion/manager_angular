import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividulesComponent } from './individules.component';

describe('IndividulesComponent', () => {
  let component: IndividulesComponent;
  let fixture: ComponentFixture<IndividulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividulesComponent]
    });
    fixture = TestBed.createComponent(IndividulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
