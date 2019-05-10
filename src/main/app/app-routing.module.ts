import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSharedModule } from '../../../projects/admin/src/app/app.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
    path: 'admin',
    loadChildren: '../../../projects/admin/src/app/app.module#AdminSharedModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminSharedModule.forRoot()
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
