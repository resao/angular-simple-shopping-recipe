import { NgModule } from '@angular/core';
import * as firebase from 'firebase';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

firebase.initializeApp({
  apiKey: 'AIzaSyB7PTdvK6rRopjc0UiM7b03_6z33vquPEU',
  authDomain: 'ng-recipe-book-c67db.firebaseapp.com'
});

// If the user signs in, set the token
/*firebase.auth().onAuthStateChanged(() => {
  if (firebase.auth().currentUser) {
    this.getToken();
  }
});*/

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})

export class CoreModule {}
