import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { WorkApplicationComponent } from './work-application/work-application.component';
import { WorkApplicationDetailsComponent } from './work-application-details/work-application-details.component';
import { OngoingWorkComponent } from './ongoing-work/ongoing-work.component';
import { OngoingWorkDetailsComponent } from './ongoing-work-details/ongoing-work-details.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { WorkCategoryComponent } from './work-category/individual.component';
import { WorkCategoryDetailComponent } from './work-category-detail/work-category-details.component';
import { ActivatedRoute } from '@angular/router';
import { ComplaintsDetailsComponent } from './complaints-details/complaints-details.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { RequestComponent } from './request/request.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
const routes: Routes = [
  {
    path: '',
    component: WorkComponent,
  },
  {
    path: 'work-category',
    component: WorkCategoryComponent,
    children: [
      {
        path: 'detail/:workId',
        component: WorkCategoryDetailComponent,
      },
    ],
  },
  {
    path: 'business',
    component: BusinessesComponent,
    children: [
      {
        path: 'detail/:workId',
        component: BusinessDetailsComponent,
      },
    ],
  },
  {
    path: 'request',
    component: RequestComponent,
    children: [
      {
        path: 'detail/:workId',
        component: RequestDetailsComponent,
      },
    ],
  },
  {
    path: 'works',
    component: WorkComponent,
  },
  {
    path: 'works/work-details/:id',
    component: WorkDetailsComponent,
  },
  {
    path: 'work-application',
    component: WorkApplicationComponent,
  },
  {
    path: 'work-app-details',
    component: WorkApplicationDetailsComponent,
  },
  {
    path: 'ongoing-work',
    component: OngoingWorkComponent,
  },
  {
    path: 'ongoing-work-details',
    component: OngoingWorkDetailsComponent,
  },
  {
    path: 'complaints',
    component: ComplaintsComponent,
  },
  {
    path: 'complaint-details',
    component: ComplaintsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
