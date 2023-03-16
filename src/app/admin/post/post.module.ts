import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsPage } from './pages/posts/posts.page';


@NgModule({
  declarations: [
    PostsPage
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
