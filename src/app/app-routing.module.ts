import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './core/components/examples/examples.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {
    component: ExamplesComponent,
    path: '',
  },
  {
    path: '',
    loadChildren: () => AdminModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
