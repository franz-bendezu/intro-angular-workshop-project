import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('LayoutComponent: ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('LayoutComponent: ngOnDestroy called');
  }
}
