import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepipeComponent } from './datepipe/datepipe.component';
import { CustomdatePipe } from './customdate.pipe';
import { CurrencypipeComponent } from './currencypipe/currencypipe.component';
import { CustomcurrencyPipe } from './customcurrency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatepipeComponent,
    CustomdatePipe,
    CurrencypipeComponent,
    CustomcurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
