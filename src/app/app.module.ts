import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ManagerComponent } from './manager-main/manager.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { Manager1Component } from './manager1/manager1.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ManagerComponent,
    LoginComponent,
    HeaderComponent,
    Manager1Component,
    SenderComponent,
    ReceiverComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
