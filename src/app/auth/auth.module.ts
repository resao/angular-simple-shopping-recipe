import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SignupinComponent } from './signupin/signupin.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    SignupinComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
