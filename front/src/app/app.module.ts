import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackendService } from './backend.service';
import { EDITION_PROVIDER, EditionsService } from './editions';
import { ContentComponent } from './content/content.component';
import { EditionGuard } from './edition-guard';
import { RegistrationComponent } from './registration/registration.component';



const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/abitare',
    pathMatch: 'full'
  }, {
    path: ':edition',
    component: ContentComponent,
    canActivate: [EditionGuard]
  }, {
    path: '**',
    redirectTo: '/abitare'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    BackendService,
    EDITION_PROVIDER, EditionsService,
    EditionGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
