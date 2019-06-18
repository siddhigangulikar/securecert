import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {MatIconModule} from '@angular/material/icon';

import { MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatDialogModule, MatMenuModule, MatNavList, MatListModule, MatToolbarModule } from '@angular/material';
import { CertVerifierComponent } from './cert-verifier/cert-verifier.component';
// import {TopnavComponent} from '../topnav/topnav.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path:'cert-Verifier',
        component:CertVerifierComponent,
      }
    ]
    
  }
];

@NgModule({
  declarations: [HomeComponent, CertVerifierComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
   
    
   
  ]
})
export class HomeModule { }
