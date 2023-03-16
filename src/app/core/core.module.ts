import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { DataService } from './services/data.service';
import { ExamplesComponent } from './components/examples/examples.component';

@NgModule({
  declarations: [LayoutComponent, ExamplesComponent],
  imports: [CommonModule],
  providers: [DataService],
  exports: [LayoutComponent],
})
export class CoreModule {}
