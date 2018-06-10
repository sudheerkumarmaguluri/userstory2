import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlashMessageModule} from 'angular-flash-message';
import { FlashMessagesModule, FlashMessagesComponent } from 'ngx-flash-messages';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { RouterModule, Routes } from '@angular/router';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {NgbModal,NgbModule , ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FlashComponent } from './flash/flash.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { AttendenceviewComponent } from './attendenceview/attendenceview.component';
import { ChartsModule } from 'ng2-charts'
import { HttpClientModule } from '@angular/common/http';
import { PieviewComponent } from './pieview/pieview.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashComponent,
    DashboardComponent,
    AttendenceviewComponent,
    PieviewComponent
    
    
  ],
  imports: [    BrowserModule,
    FlashMessagesModule,
    NgFlashMessagesModule,
    ModalDialogModule,
    TooltipModule,
    ModalDialogModule,
    BrowserAnimationsModule,
FormsModule,
    NgbModule.forRoot(),
    HttpModule,
ChartsModule,
HttpClientModule,
Ng2SearchPipeModule,



    RouterModule.forRoot([
      {
    path:'flash',component:FlashComponent
      },
      {
        path:'admindashboard' ,component:DashboardComponent
      }
    ])
    ],
    providers: [],
    bootstrap: [AppComponent],
    
  
 
})
export class AppModule {

 }
