import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { AppComponent } from '../../app.component';
import { AppConfig as config } from '../../app.config';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signupin',
  templateUrl: './signupin.component.html'
})
export class SignupinComponent implements OnInit {
  isSignup: Boolean = true;
  config = config;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.url.subscribe(
      (url: UrlSegment[]) => {
        if (url.some(e => e.path !== config.urls.signup.segment)) {
          this.isSignup = false;
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    if (this.isSignup) {
      this.store.dispatch(new AuthActions.TrySignup({username: email, password}));
    } else {
      this.store.dispatch(new AuthActions.TrySignin({username: email, password}));
    }
  }
}
