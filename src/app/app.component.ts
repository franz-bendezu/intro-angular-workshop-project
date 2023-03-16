import { Component, OnChanges } from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project 123';

  currentDate = new Date().toISOString();

  price = 12.5;

  username = 'Juan';

  isLoggedIn = false;

  fullName = 'Pedro M.';

  constructor(public appService: DataService) {
    console.log(appService.getData());
  }

  onClick() {
    this.fullName = this.fullName.toUpperCase();
  }

  onChange($event: any) {
    console.log($event.target.value);
  }

  onInput($event: any) {
    console.log($event.target.value);
  }

  isShowLayout = true;
  hideLayout() {
    this.isShowLayout = false;
  }
}
