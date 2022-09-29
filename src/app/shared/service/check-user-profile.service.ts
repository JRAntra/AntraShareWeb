import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheckUserProfileService {

  constructor(private http: HttpClient) { }


  getUserProfile(username: string): Observable<any>{

    return this.http.get<any>("http://localhost:4231/api/users/getProfile/" + username)

  }
}
