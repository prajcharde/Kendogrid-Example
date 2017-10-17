import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
//import { KendogridComponent } from './kendogrid/kendogrid.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
//import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { KendogridComponent } from "./salesformgrid/kendogrid.component";
@NgModule({
  declarations: [
    AppComponent,
    KendogridComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,GridModule,ReactiveFormsModule,FormsModule,ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
