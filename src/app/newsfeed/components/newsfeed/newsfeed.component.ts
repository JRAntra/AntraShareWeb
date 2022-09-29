import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { NewsfeedStory, UserInfo } from 'src/app/shared/models/newsfeed';
import { NewsfeedStoryService } from '../../services/newsfeed-story.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.sass']
})
export class NewsfeedComponent implements OnInit{

  constructor(
    private newsfeedService : NewsfeedStoryService,
    private fb : FormBuilder,
    private ar : ActivatedRoute
    ) { 
  }
    storyList: NewsfeedStory[] = []
    storyListObservable?: Observable<NewsfeedStory[]>

  ngOnInit(): void {
    this.newsfeedService.getNewsFeedStory().subscribe(value =>{
      this.storyList = value
    })

    this.ar.paramMap.subscribe(res=>console.log(res))
  }
}
