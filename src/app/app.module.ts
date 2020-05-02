import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComp } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { notFound } from './notFound/notFound.component';
import { apiservice } from './services/api.service'
// import { TokenInterceptorService } from './token-interceptor.service';
// import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComp,
    LoginPageComponent,
    HomepageComponent,
    notFound,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [apiservice],
  bootstrap: [AppComp]
})
export class AppModule { }
