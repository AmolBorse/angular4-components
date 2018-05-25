import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule,
    AngularMultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AngularMultiSelectModule
  ]
})
export class AppModule { }
