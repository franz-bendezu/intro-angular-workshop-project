import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { DataService } from './services/data.service';
import { ExamplesComponent } from './components/examples/examples.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, ExamplesComponent],
  imports: [CommonModule, SharedModule],
  providers: [DataService],
  exports: [LayoutComponent, ExamplesComponent],
})
export class CoreModule {}
