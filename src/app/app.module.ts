import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempalteDrivenComponent } from './tempalte-driven/tempalte-driven.component';
import { RelativeComponent } from './relative/relative.component';

@NgModule({
  declarations: [AppComponent, TempalteDrivenComponent, RelativeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
