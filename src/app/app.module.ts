import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './view/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ServicesComponent } from './view/services/services.component';
// import { SlideshowModule } from 'ng-simple-slideshow';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { ContactComponent } from './view/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FeedBackService } from './services/feedback.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { FeedbackDailogComponent } from './view/feedback-dailog/feedback-dailog.component';
import { MatDialogModule } from "@angular/material/dialog";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'aboutUs', component: AboutUsComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
    FeedbackDailogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDividerModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  entryComponents: [FeedbackDailogComponent],
  providers: [FeedBackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
