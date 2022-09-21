import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.sass']
})
export class StoryItemComponent implements OnInit {
  @Input() storyItem?: NewsfeedStory
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    

    
  }

}
