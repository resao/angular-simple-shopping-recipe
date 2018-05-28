import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import * as firebase from 'firebase';
import { Store } from '@ngrx/store';

import { SignupinComponent } from './signupin/signupin.component';
import { AuthRoutingModule } from './auth-routing.module';
import * as fromApp from '../store/app.reducers';
import * as AuthActions from '../auth/store/auth.actions';

@NgModule({
  declarations: [
    SignupinComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})

export class AuthModule {
  constructor(private store: Store<fromApp.AppState>) {

    // Start our firebase app
    firebase.initializeApp({
      apiKey: 'AIzaSyB7PTdvK6rRopjc0UiM7b03_6z33vquPEU',
      authDomain: 'ng-recipe-book-c67db.firebaseapp.com'
    });

    // Function to ensure that if a firebase token is found on init then our state is updated to reflect this
    const unsubscribe = firebase.auth().onAuthStateChanged(() => {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        currentUser.getIdToken().then((token) => {
          console.log('User already signed in');
          this.store.dispatch(new AuthActions.Signin());
          unsubscribe(); // Unsubscribe this listener so we do not action this again
        });
      }
    });
  }
}
