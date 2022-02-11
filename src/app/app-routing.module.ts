import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { TempalteDrivenComponent } from './tempalte-driven/tempalte-driven.component';

const routes: Routes = [
  {
    path: 'login',
    component: TempalteDrivenComponent,
  },
  {
    path: 'register',
    component: ReactiveComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
