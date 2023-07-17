import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../services/business.service';
import { Router } from '@angular/router';
import { business } from 'data-types';
@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent {
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
  workCategoryData: business[] = [];
  filteredWorkCategory: business[];
  searchTerm: string = '';

  formData: any = {}; // Initialize an empty object to hold the form data


  constructor(
    private cardService: BusinessService,
    private router: Router

  ) {
    // this.workCategoryData = this.cardService.workCategoryData;
    this.filteredWorkCategory = this.workCategoryData;
  }

  filterByState(status: string) {
    if (status === 'all') {
      this.filteredWorkCategory = this.workCategoryData; // If 'all' is selected, show all items
    } else {
      this.filteredWorkCategory = this.workCategoryData.filter(work => work.status === status); // Filter by the selected state
    }
  }

  filterBySearchTerm() {
    this.filteredWorkCategory = this.workCategoryData.filter(work =>
      work.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      work.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit() {
    this.fetchWorkCategories();
  }

  fetchWorkCategories() {
    this.cardService.getAllWorks().subscribe(
      (data: business[]) => {
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
    this.router.navigate(['/business/detail', workId]);
  }


  // // Form Handling
  // submitForm() {
  //   this.formData.state = 'Draft';
  //   this.cardService.sendData(this.formData)
  //     .subscribe(
  //       response => {
  //         // Handle the response from the server
  //         console.log(response);
  //       },
  //       error => {
  //         // Handle any errors
  //         console.error(error);
  //       }
  //     );
  // }


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
