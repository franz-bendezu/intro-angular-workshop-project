import { Component } from '@angular/core';
import { AppService } from './app.service';

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

  constructor(public appService: AppService) {
    console.log(appService.getData());
  }
}
