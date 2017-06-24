import {DataStorageService} from './../shared/data-storage.service';
import {Component} from '@angular/core';
import {Response} from '@angular/http';

@Component({selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.css']})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}
  onSaveClick() {
    this.onSaveRecipes();
  }

  onSaveRecipes() {
    this
      .dataStorageService
      .storeRecipes()
      .subscribe((response: Response) => {
        console.log(response);
      });
  }
}
