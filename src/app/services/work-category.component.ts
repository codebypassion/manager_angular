import { Component, OnInit } from '@angular/core';
import { WorksService } from '../works.service';
import { WorkCategoryInterface } from '../data-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-category',
  templateUrl: './work-category.component.html',
  styleUrls: ['./work-category.component.css']
})
export class WorkCategoryComponent {
  taskCategory1: boolean = false;
  taskCategory2: boolean = true;


  wlToCreate() {
    this.taskCategory1 = !this.taskCategory1;
    this.taskCategory2 = !this.taskCategory2;
  }

  backToWLists() {
    this.taskCategory1 = !this.taskCategory1;
    this.taskCategory2 = !this.taskCategory2;
  }

  // Data from works.service.ts
  workCategoryData: WorkCategoryInterface[] = [];
  filteredWorkCategory: WorkCategoryInterface[];
  searchTerm: string = '';

  formData: any = {}; // Initialize an empty object to hold the form data


  constructor(
    private cardService: WorksService,
    private router: Router

  ) {
    // this.workCategoryData = this.cardService.workCategoryData;
    this.filteredWorkCategory = this.workCategoryData;
  }

  filterByState(state: string) {
    if (state === 'all') {
      this.filteredWorkCategory = this.workCategoryData; // If 'all' is selected, show all items
    } else {
      this.filteredWorkCategory = this.workCategoryData.filter(work => work.state === state); // Filter by the selected state
    }
  }

  filterBySearchTerm() {
    this.filteredWorkCategory = this.workCategoryData.filter(work =>
      work.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      work.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit() {
    this.fetchWorkCategories();
  }

  fetchWorkCategories() {
    this.cardService.getAllWorks().subscribe(
      (data: WorkCategoryInterface[]) => {
        this.workCategoryData = data;
        this.filteredWorkCategory = this.workCategoryData; // Update filteredWorkCategory
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  // open detail page
  openWorkDetailsPage(workId: number) {
    this.router.navigate(['/work-category/detail', workId]);
  }


  // Form Handling
  submitForm() {
    this.formData.state = 'Draft';
    this.cardService.sendData(this.formData)
      .subscribe(
        response => {
          // Handle the response from the server
          console.log(response);
        },
        error => {
          // Handle any errors
          console.error(error);
        }
      );
  }


  // Choose Image and show on side
  selectedFile: File | null = null;
  imageUrl: string | null = null;

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.selectedFile = file;
  //     this.getImageDataUrl(file);
  //   } else {
  //     this.selectedFile = null;
  //     this.imageUrl = null;
  //   }
  // }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.warn(file);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }


  getImageDataUrl(file: File): void {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target?.result;
    };
    reader.readAsDataURL(file);
  }


}
