import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig } from '../app.config';
import { SignupinComponent } from './signupin/signupin.component';

const AppUrls = new AppConfig().urls;

const authRoutes: Routes = [
  {path: AppUrls.signup.segment, component: SignupinComponent },
  {path: AppUrls.signin.segment, component: SignupinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(authRoutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {

}
