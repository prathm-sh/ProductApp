import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
//required modules imported
import { HttpClientModule } from "@angular/common/http";
import { ApiserviceService } from './apiservice.service';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreatecatComponent } from './createcat/createcat.component';
import { ReadcatComponent } from './readcat/readcat.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    CreatecatComponent,
    ReadcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxPaginationModule,
    


  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
