import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NewsfeedStory, UserInfo } from 'src/app/shared/models/newsfeed';
import { NewsfeedStoryService } from '../../services/newsfeed-story.service';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.sass']
})
export class NewsfeedComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, OnDestroy, DoCheck {

  constructor(private newsfeedService : NewsfeedStoryService) { 
  }
  
  counter : number = 0




  storyList: any
  storyListFromParent: NewsfeedStory[] = []

  // ngOnInit(): void {

  //   this.newsfeedService.getNewsFeedStory().subscribe(value =>{
  //     this.storyList = value
  //     console.log(this.storyList)
  //   })
  // }

  //   addCounter(){
  //     this.counter ++;
  //   }
  ngOnChanges(): void {
    console.log("ngOnChanges")
  }
  ngOnInit(): void {
    // this.service.getNewsFeedStory().subscribe(value => {
    //   this.storyList = value
    // })
    console.log("ngOnint")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  //child initialize lifecycle hooks

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

 

}
