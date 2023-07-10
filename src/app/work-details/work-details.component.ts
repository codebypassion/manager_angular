import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { location, work } from 'data-types';
import { WorkService } from '../services/work.service';


@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent {
  work!:work;
  workId!:number;
  locationList: location[] = [];
  myData:string ='';
  // locationId!:number;
  constructor(private workService:WorkService, private route:ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.workId = +id;
      this.workService.getWorkById(this.workId).subscribe(data => {
        this.work = data;
      });
    }
    this.getLocationList();

  }

  
  getLocationList(): void {
    this.workService.getlocationById().subscribe((result: location[]) => {
      console.warn(result);
      if (result) {
        this.locationList = result;
        this.locationList = result;
        console.warn(this.locationList[0].locatioCodes);
        // this.myData=this.locationList.locatioCodes;
      }
    });
  }
//   redirectToMap(){
//     const element = document.querySelector('span[data-custom-value]');
//     if (element) {
//       const customValue = element.getAttribute('data-custom-value');
//       console.log('Custom Value:', customValue);
//       const url = `https://www.google.com/maps?q=${this.myData}`;
//       window.open(url, '_blank');
//   }
// }
}
