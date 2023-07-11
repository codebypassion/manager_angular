import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { WorkApplicationComponent } from './work-application/work-application.component';
import { WorkApplicationDetailsComponent } from './work-application-details/work-application-details.component';
import { OngoingWorkComponent } from './ongoing-work/ongoing-work.component';
import { OngoingWorkDetailsComponent } from './ongoing-work-details/ongoing-work-details.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ComplaintsDetailsComponent } from './complaints-details/complaints-details.component';
import { IndividulesComponent } from './individules/individules.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {
    path: '',
    component:WorkComponent
  },
  {
    path: 'works',
    component:WorkComponent
  },
  {
    path: 'works/work-details/:id',
    component: WorkDetailsComponent
  },
  {
    path: 'work-application',
    component:WorkApplicationComponent,
  },
  {
    path: 'work-app-details',
    component:WorkApplicationDetailsComponent,
  },
  {
    path: 'ongoing-work',
    component:OngoingWorkComponent,
  },
  {
    path:'ongoing-work-details',
    component:OngoingWorkDetailsComponent,
  },
  {
    path:'complaints',
    component:ComplaintsComponent,
  },
  {
    path:'complaint-details',
    component:ComplaintsDetailsComponent,
  },
  {
    path:'individuals',
    component:IndividulesComponent,
  },
  {
    path:'business',
    component:BusinessComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
