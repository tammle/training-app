import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxDashboardModule } from 'ngx-dashboard-tammle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
