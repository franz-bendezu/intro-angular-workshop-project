import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
})
export class ExamplesComponent {
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

  initialValue = 5;
  onIncremented($event: number) {
    console.log(this.initialValue, $event);
  }
}
