import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) { }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
