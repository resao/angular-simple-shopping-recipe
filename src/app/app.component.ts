import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  loadedFeature = 'recipe';

  constructor() { }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
