import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRootRoutingModule } from './admin-root-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRootRoutingModule
  ]
})
export class AdminRootModule { }
