import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommentListComponent } from './comment-list/comment-list.component';
@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.sass']
})
export class StoryItemComponent implements OnInit {
  @Input() storyItem?: NewsfeedStory
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  openDialog(){
    const dialogRef = this.dialog.open(CommentListComponent, 
      {data: this.storyItem?.comment,
        disableClose: true})

    dialogRef.afterClosed().subscribe(res=> console.log(res))

    // dialogRef.afterClosed().subscribe(res=> console.log(res))
  }

}
