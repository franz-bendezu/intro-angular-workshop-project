import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiEndpoint = 'https://jsonplaceholder.typicode.com';

  constructor(public httpService: HttpClient) {}

  findAll() {
    return this.httpService.get<IPost[]>(this.apiEndpoint + '/posts');
  }
}
