import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsPage } from './pages/posts/posts.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PostsPage
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule
  ]
})
export class PostModule { }
