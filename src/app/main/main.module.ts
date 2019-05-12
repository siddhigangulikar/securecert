import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';

import { MatIconModule, MatToolbarModule, MatMenuModule, MatListModule, MatButtonModule } from '@angular/material';
// import { HomeComponent } from './home/home.component';
// import { LandingComponent } from './dashboard/landing/landing.component';
import {HomeModule} from './home/home.module';
import { CertificateTempComponent } from './certificate-temp/certificate-temp.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    TopnavComponent,
    CertificateTempComponent,
    ],

  imports: [

    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    
    
    
  ]
  // exports:[TopnavComponent]    

})
export class MainModule { }
