import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WorkComponent } from './work.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';
import { WorkService } from '../services/work.service';
import { work } from 'data-types';



describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;
  let workService: WorkService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatIconModule,FormsModule],
      declarations: [WorkComponent],
      providers: [WorkService] // Update to pass WorkService as a string token

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    workService = TestBed.inject(WorkService); // Inject WorkService
    fixture.detectChanges();
  });
  it('should call getWork and populate workList', () => {
    const mockWorkList: work[] = [
      {
        workRefId: 'ref1',
        title: 'Work 1',
        description: 'Description 1',
        workCategoryTitle: 'Category 1',
        workCategoryDescription: 'Category Description 1',
        workCategoryBanner: 'Category Banner 1',
        location: 'Location 1',
        isGeneratorBusiness: 'Yes',
        generatorName: 'Generator 1',
        generatorPic: 'Generator Pic 1',
        workStatus: 'in_progress',
        status: 'completed',
        id: 1
      }
    ];
  
    spyOn(workService, 'getWork').and.returnValue(of(mockWorkList)); // Spy on getWork and return mockWorkList
  
    component.getList();
  
    expect(workService.getWork).toHaveBeenCalled(); // Verify that getWork has been called
    expect(component.workList).toEqual(mockWorkList); // Verify that workList is populated with mockWorkList
    expect(component.filterWorkList).toEqual(mockWorkList); // Verify that filterWorkList is populated with mockWorkList
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("check component name", ()=>{
    expect(component.workname).toBe("lavi");
  });
  
  it("check component function", ()=>{
    expect(component.sum()).toBe(100);
  })
});
