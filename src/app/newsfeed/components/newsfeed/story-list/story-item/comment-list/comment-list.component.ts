import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from 'src/app/shared/models/newsfeed';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass']
})
export class CommentListComponent implements OnInit {

  constructor(
    private df: MatDialogRef<CommentListComponent>,
    @Inject(MAT_DIALOG_DATA) private commentList: Comment[]) { }

  list: Comment[] = []
  ngOnInit(): void {
    this.list = this.commentList
  }
  closeComment(){
    this.df.close("dialog closed")
  }

}
