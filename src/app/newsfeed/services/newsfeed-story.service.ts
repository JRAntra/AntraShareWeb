import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
@Injectable({
  providedIn: 'root'
})
export class NewsfeedStoryService {

  storyList : any
  getDataIndicator = true;

  likeList : any

  constructor(private http : HttpClient) { }

// newsfeedStory
  getNewsFeedStory():Observable<NewsfeedStory[]>{

    return this.http.get<NewsfeedStory[]>("http://localhost:4231/api/news")  //Observable<newsfeedStory> 
    
  }
  updateLikeList(newLikelist : any){
    this.likeList = newLikelist
  }

}
