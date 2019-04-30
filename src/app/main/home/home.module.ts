import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatHint, MatError, MatInputModule, ErrorStateMatcher, MatDialogModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule
   
  ]
})
export class HomeModule { }
