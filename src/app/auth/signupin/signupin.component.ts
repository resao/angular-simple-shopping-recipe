import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'app-signupin',
  templateUrl: './signupin.component.html'
})
export class SignupinComponent implements OnInit {
  private isSignup: Boolean = true;

  constructor(private authService: AuthService, private route: ActivatedRoute, private config: AppConfig) { }

  ngOnInit() {
    const id = this.route.url.subscribe(
      (url: UrlSegment[]) => {
        if (url.some(e => e.path !== this.config.urls.signup.segment)) {
          this.isSignup = false;
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    if (this.isSignup) {
      this.authService.signupUser(email, password);
    } else {
      this.authService.signinUser(email, password);
    }
  }
}
