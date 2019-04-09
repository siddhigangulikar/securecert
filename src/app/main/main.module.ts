import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { MatIconModule, MatToolbarModule, MatMenuModule, MatListModule, MatButtonModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path:'',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path:'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path:'about',
        loadChildren: './about/about.module#AboutModule'
      }
    ]
  }
];

@NgModule({
  declarations: [MainComponent, TopnavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule


  ]
})
export class MainModule { }
