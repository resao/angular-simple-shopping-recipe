import {DataStorageService} from './../shared/data-storage.service';
import {Component} from '@angular/core';
import {Response} from '@angular/http';
import { AppConfig } from '../app.config';
import { AuthService } from '../auth/auth.service';

@Component({selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.css']})
export class HeaderComponent {
  constructor(
    private config: AppConfig,
    private authService: AuthService,
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
}
