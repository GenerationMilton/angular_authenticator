import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './controller/login/login.component';


@NgModule({
  declarations: [
   LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers:[],
  bootstrap:[]//AppComponent]
})
export class AppModule { }
