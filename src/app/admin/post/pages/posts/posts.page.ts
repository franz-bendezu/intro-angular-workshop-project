import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.css'],
})
export class PostsPage implements OnInit {
  posts: IPost[] = [];

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.findAll().subscribe((results) => {
      this.posts = results;
    });
  }
}
