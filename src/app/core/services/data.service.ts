import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = ['item 1', 'item 2', 'item 3'];

  getData() {
    return this.data;
  }
}
