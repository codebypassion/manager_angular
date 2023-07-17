import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkService } from '../services/work.service';
import { location } from 'data-types';

import { Router } from '@angular/router';
import { WorksService } from '../services/works.service';


@Component({
  selector: 'app-work-category-detail',
  templateUrl: './work-category-detail.component.html',
  styleUrls: ['./work-category-detail.component.css']
})

export class WorkCategoryDetailComponent {

  work: any = [];
  textt: string = '';
  locationList: location[] = [];


  constructor(
    private route: ActivatedRoute,
    private cardService: WorksService,
    private workService:WorkService,

    private router: Router,


  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      let workId = +params['workId']; // Get the category ID from the route parameter
      this.cardService.getWorkById(workId).subscribe(data => {
        this.work = data;
        console.log(data);
      })
    });
    this.getLocationList();

  }
  
  getLocationList(): void {
    this.workService.getlocationById().subscribe((result: location[]) => {
      console.warn(result);
      if (result) {
        this.locationList = result;
        this.locationList = result;
        // console.warn(this.locationList[0].locatioCodes);
        // this.myData=this.locationList.locatioCodes;
      }
    });
  }


  // Editing category
  formData: any = {}; // Initialize an empty object to hold the form data


  // toggle buttons
  showDiv1: boolean = true;
  showDiv2: boolean = false;

  shwEdt() {
    this.showDiv1 = !this.showDiv1;
    this.showDiv2 = !this.showDiv2;
  }

  hideEdt() {
    this.showDiv1 = !this.showDiv1;
    this.showDiv2 = !this.showDiv2;
  }

  // target Audience
  targetAudDiv1: boolean = true;
  targetAudDiv2: boolean = false;

  shwTAEdt() {
    this.targetAudDiv1 = !this.targetAudDiv1;
    this.targetAudDiv2 = !this.targetAudDiv2;
  }

  hideTAEdt() {
    this.targetAudDiv1 = !this.targetAudDiv1;
    this.targetAudDiv2 = !this.targetAudDiv2;
  }

  // work Flows Attached
  flowsAttached2: boolean = true;
  flowsAttached1: boolean = false;

  shwWFAEdt() {
    this.flowsAttached1 = !this.flowsAttached1;
    this.flowsAttached2 = !this.flowsAttached2;
  }

  hideWFAEdt() {
    this.flowsAttached1 = !this.flowsAttached1;
    this.flowsAttached2 = !this.flowsAttached2;
  }



  


}
