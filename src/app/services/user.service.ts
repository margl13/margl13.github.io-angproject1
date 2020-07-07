import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../models/User';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }


  users(): Observable<User[]> {
  return this.httpClient.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }
}
