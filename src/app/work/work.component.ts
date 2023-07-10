import { Component, OnInit } from '@angular/core';
import { WorkService } from '../services/work.service';
import { work, work_app } from 'data-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  workList: work[] = [];
  filterWorkList: work[] = [];
  searchTerm:string='';

  constructor(private workService: WorkService, private router:Router) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.workService.getWork().subscribe((result: work[]) => {
      console.warn(result);
      if (result) {
        this.workList = result;
        this.filterWorkList = result;
      }
    });
  }


  filterByState(state: string): void {
    if (state === 'all') {
      this.filterWorkList = this.workList;
    } else {
      this.filterWorkList = this.workList.filter(workItem => workItem.status === state);
    }
  }

  filterByAdminState(state: string): void {
    if (state === 'all') {
      this.filterWorkList = this.workList;
    } else {
      this.filterWorkList = this.workList.filter(workItem => workItem.workStatus === state);
    }
  }

  filterBySearchTerm() {
    this.filterWorkList = this.workList.filter(work =>
      work.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      work.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  openDetallPage(id: number) {
    this.router.navigate(['/works/work-details', id]);
  }
}
