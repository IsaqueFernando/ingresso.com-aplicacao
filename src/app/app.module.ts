import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ingresso } from './ingresso.model';
import { IngressoApiService } from './ingresso.ApiService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot([])
   ],
   providers: [IngressoApiService, HttpClient, Ingresso],
   bootstrap: [AppComponent]
})
export class AppModule { }
