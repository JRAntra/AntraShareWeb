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
export class StoryListComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, OnDestroy, DoCheck {

  @Input() counter?: number
  // @Input() storyList?: NewsfeedStory[];
  @Output() sendCounter: EventEmitter<number> = new EventEmitter<number>();
  public storyList: any
  public data? : Observable<NewsfeedStory>
  public stringValue = new Date()
  constructor(private service: NewsfeedStoryService) {
    // this.data = []
  }

  ngOnChanges(): void {
    console.log(" child :ngOnChanges")
  }
  ngOnInit(): void {
    // this.service.getNewsFeedStory().subscribe(value => {
    //   this.storyList = value
    // })
    console.log("child: ngOnit")
    this.data = this.service.getNewsFeedStory()
  }
  ngDoCheck(): void {
    console.log(" child :ngDoCheck")
    
  }
  ngAfterContentInit(): void {
    console.log(" child :ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log(" child :ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log(" child :ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log(" child :ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }







}
