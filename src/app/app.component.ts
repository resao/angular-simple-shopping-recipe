import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB7PTdvK6rRopjc0UiM7b03_6z33vquPEU',
      authDomain: 'ng-recipe-book-c67db.firebaseapp.com'
    });

    firebase.auth().onAuthStateChanged(() => this.authService.getToken());
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
