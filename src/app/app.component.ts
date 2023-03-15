import { Component } from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project 123';

  currentDate = new Date() .toISOString()

  price = 12.5


  username = 'Juan'

  isLoggedIn = false

  constructor(public appService: DataService) {
    console.log(appService.getData());
  }
}
