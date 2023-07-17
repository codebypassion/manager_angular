import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../services/request.service';
  import { request } from 'data-types';
import { Router } from '@angular/router';
@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent {
  work: any = [];
  textt: string = '';


  constructor(
    private route: ActivatedRoute,
    private cardService: RequestService,
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



  // redirectign from category details to work Flows to attache flows
  redirectToGeneratorFlow() {
    this.router.navigate(['/work-flow'], { queryParams: { showCheckBox: true } });
  }


}
