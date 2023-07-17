import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// imports material-UI
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WorkComponent } from './work/work.component';
import { WorkApplicationDetailsComponent } from './work-application-details/work-application-details.component';
import { OngoingWorkComponent } from './ongoing-work/ongoing-work.component';
import { OngoingWorkDetailsComponent } from './ongoing-work-details/ongoing-work-details.component';
import { ComplaintsDetailsComponent } from './complaints-details/complaints-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ComplaintsComponent } from './complaints/complaints.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WorkFlowComponent } from './work-flow/work-flow.component';
// import { WorkCategoryComponent } from './individual/individual.component';
import { WorkCategoryComponent } from './work-category/individual.component';
import { WorkCategoryDetailComponent } from './work-category-detail/work-category-details.component';
// import { WorkCategoryDetailComponent } from './individual-detail/individual-details.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { WorkApplicationComponent } from './work-application/work-application.component';
// import { BusinessComponent } from './business/business.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { RequestComponent } from './request/request.component';
import { RequestDetailsComponent } from './request-details/request-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    WorkApplicationDetailsComponent,
    OngoingWorkComponent,
    OngoingWorkDetailsComponent,
    ComplaintsComponent,
    ComplaintsDetailsComponent,
    WorkFlowComponent,
    WorkCategoryComponent,
    WorkCategoryDetailComponent,
    WorkDetailsComponent,
    WorkApplicationComponent,
    // BusinessComponent,
    BusinessDetailsComponent,
    BusinessesComponent,
    RequestComponent,
    RequestDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    DragDropModule,
    HttpClientModule,
    FormsModule,
    MatTooltipModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
