import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
    firebase.initializeApp({
      apiKey: 'AIzaSyB7PTdvK6rRopjc0UiM7b03_6z33vquPEU',
      authDomain: 'ng-recipe-book-c67db.firebaseapp.com'
    });

    // If the user signs in, set the token
    firebase.auth().onAuthStateChanged(() => {
      if (firebase.auth().currentUser) {
        this.getToken();
      }
    });
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      )
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    if (!this.token) {
      firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => {
            this.token = token
            return this.token;
          }
        );
    } else {
      return this.token;
    }
  }

  isAuthenticated() {
    return this.token != null;
  }
}
