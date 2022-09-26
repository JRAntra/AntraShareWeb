import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsfeedStoryService {

  constructor(private http : HttpClient) { }

  baseDomainUrl = environment.localApiDomain
  baseApiUrl = environment.newsApiUrl
  baseUrl = this.baseDomainUrl + this.baseApiUrl

// newsfeedStory
  getNewsFeedStory():Observable<NewsfeedStory[]>{
    const apiUrl = ""
    const finalUrl = this.baseUrl + apiUrl
    console.log(finalUrl)
    return this.http.get<NewsfeedStory[]>(finalUrl)  //Observable<newsfeedStory> 
    
  }


}
