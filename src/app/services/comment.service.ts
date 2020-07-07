import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Comment} from '../models/Comment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }
  commentofSinglePost(id): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
