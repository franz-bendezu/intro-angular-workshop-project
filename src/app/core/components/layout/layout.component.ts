import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  @Input()
  inputValue = 0;
  currentItem = ''

  @Output()
  incremented = new EventEmitter<number>();

  constructor(public dataService: DataService){}

  ngOnInit(): void {
    console.log('LayoutComponent: ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('LayoutComponent: ngOnDestroy called');
  }

  increment() {
    this.inputValue++;
    this.incremented.emit(this.inputValue);
  }
  
  addData(){
    this.dataService.addData(this.currentItem)
    this.currentItem = ''
  }
}
