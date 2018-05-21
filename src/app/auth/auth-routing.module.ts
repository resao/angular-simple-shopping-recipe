import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig as config } from '../app.config';
import { SignupinComponent } from './signupin/signupin.component';

const authRoutes: Routes = [
  {path: config.urls.signup.segment, component: SignupinComponent },
  {path: config.urls.signin.segment, component: SignupinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(authRoutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {}
