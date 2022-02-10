import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelativeComponent } from './relative/relative.component';
import { TempalteDrivenComponent } from './tempalte-driven/tempalte-driven.component';

const routes: Routes = [
  {
    path: 'login',
    component: TempalteDrivenComponent,
  },
  {
    path: 'register',
    component: RelativeComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
