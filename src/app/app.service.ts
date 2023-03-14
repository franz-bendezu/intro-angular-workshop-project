import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  data = ['item 1', 'item 2', 'item 3'];

  getData() {
    return this.data;
  }
}