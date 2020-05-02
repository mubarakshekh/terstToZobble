import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { notFound } from './notFound/notFound.component';


const routes: Routes = [
  {
    path: '',
    component : LoginPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component : LoginPageComponent
  },
  {
    path: 'dashboard',
    component: HomepageComponent,
  },
  { 
    path: '**', 
    component: notFound
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})   
export class AppRoutingModule { }
