import {Component, Input} from '@angular/core';
import {User} from '../../models/User';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [`./user.component.css`]
})
export class UserComponent {
  @Input()
  user: User;

  constructor(private postService: PostService, private commentService: CommentService) {
  }

  ShowDetails(id: number): void {
  this.postService.postofSingleUser(id).subscribe(value => {
    console.log(value);
    for (const post of value) {
      this.commentService.commentofSinglePost(post.id).subscribe(comments => console.log(comments));
    }
  });
  }
}
