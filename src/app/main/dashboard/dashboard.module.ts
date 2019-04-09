import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule, MatListModule, MatLineModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  declarations: [DashboardComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatListModule, 
    MatLineModule
  ]
})
export class DashboardModule { }
