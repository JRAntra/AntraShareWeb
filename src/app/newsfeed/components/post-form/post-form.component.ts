import { Component, OnInit } from '@angular/core';
import { NewsfeedStoryService } from '../../services/newsfeed-story.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass']
})
export class PostFormComponent implements OnInit {

  constructor(private newsfeedService : NewsfeedStoryService) { }

  indicator: boolean = true;

  ngOnInit(): void {
    this.indicator = this.newsfeedService.getDataIndicator
    //observables
  }
  checkNewIndicator(){

    console.log("indicator in service changed to " + this.newsfeedService.getDataIndicator)
  }

}
