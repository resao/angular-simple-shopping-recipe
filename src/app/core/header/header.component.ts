import { DataStorageService } from './../../shared/data-storage.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { AppConfig as config } from '../../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  config = config;

  constructor(
    public authService: AuthService,
    private dataStorageService: DataStorageService) {}

  onSaveClick() {
    this.onSaveRecipes();
  }

  onFetchClick() {
    this.onFetchData();
  }

  onSaveRecipes() {
    this
      .dataStorageService
      .storeRecipes()
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
