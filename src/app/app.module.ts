import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  // Declaring all the components and modules.
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent
  ],
  // Declaring all the modules.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  // Using Bootstrap.
  bootstrap: [AppComponent]
})
export class AppModule { }
