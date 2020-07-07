import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../../models/User';
import {UserService} from '../../services/user.service';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];
  constructor(private userService: UserService) {
    this.userService.users().subscribe(value => this.users = value);
  }
}
