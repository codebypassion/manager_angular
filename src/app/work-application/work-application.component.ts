import { Component, OnInit } from '@angular/core';
import { WorkService } from '../services/work.service';
import { Router } from '@angular/router';
import { work_app } from 'data-types';


@Component({
  selector: 'app-work-application',
  templateUrl: './work-application.component.html',
  styleUrls: ['./work-application.component.css']
})
export class WorkApplicationComponent implements OnInit{
  workAppList: work_app[] = [];
  filterWorkList: work_app[] = [];
  searchTerm:string='';

  constructor(private workService: WorkService, private router:Router) {}

  ngOnInit(): void {
    this.getWorkAppList();
  }

getWorkAppList(): void{
  this.workService.getWorkApplication().subscribe((result:work_app[])=>{
    console.warn(result)
    if(result){
      this.workAppList = result;
      this.filterWorkList=result;
    }
  })
}


filterByAdminState(state: string): void {
  if (state === 'all') {
    this.filterWorkList = this.workAppList;
  } else {
    this.filterWorkList = this.workAppList.filter(workItem => workItem.adminStatus === state);
  }
}

filterBygeneratorState(state: string): void {
  if (state === 'all') {
    this.filterWorkList = this.workAppList;
  } else {
    this.filterWorkList = this.workAppList.filter(workItem => workItem.generatorStatus === state);
  }
}

filterByFinalState(state: string): void {
  if (state === 'all') {
    this.filterWorkList = this.workAppList;
  } else {
    this.filterWorkList = this.workAppList.filter(workItem => workItem.final_status === state);
  }
}


filterBySearchTerm() {
  this.filterWorkList = this.workAppList.filter(work =>
    work.workCategoryTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    work.workCategoryDescription.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
}
