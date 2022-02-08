import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager-main/manager.component';
import { Manager1Component } from './manager1/manager1.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'manager',
    component: ManagerComponent,
  },
  {
    path: 'manager1',
    component: Manager1Component,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./edit-root/edit-root.module').then((m) => m.EditModule),
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: ':id/:name',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canDeactivate: [AuthGuard],
  },
  {
    path: 'adminlogin',
    loadChildren: () =>
      import('./admin-root/admin-root.module').then((m) => m.AdminRootModule),
    canLoad: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
