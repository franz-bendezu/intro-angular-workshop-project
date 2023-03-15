import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule],
  providers: [DataService],
  exports: [LayoutComponent],
})
export class CoreModule {}
