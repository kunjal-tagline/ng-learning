import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepipeComponent } from './datepipe/datepipe.component';
import { CustomdatePipe } from './customdate.pipe';
import { CurrencypipeComponent } from './currencypipe/currencypipe.component';
import { CustomcurrencyPipe } from './customcurrency.pipe';
import { SlicepipeComponent } from './slicepipe/slicepipe.component';
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';
import { JsonpipeComponent } from './jsonpipe/jsonpipe.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepipeComponent,
    CustomdatePipe,
    CurrencypipeComponent,
    CustomcurrencyPipe,
    SlicepipeComponent,
    AsyncpipeComponent,
    JsonpipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
