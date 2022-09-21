import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { EventEmitter } from '@angular/core';
import { NewsfeedStoryService } from 'src/app/newsfeed/services/newsfeed-story.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})
export class StoryListComponent implements OnInit {

  @Input() storyList?: NewsfeedStory[]
  constructor() {}

  ngOnInit(): void {
    console.log(this.storyList)
  }









}
