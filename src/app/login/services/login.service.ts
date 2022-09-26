import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userLoginToken } from 'src/app/shared/models/userAccount';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  
  private baseDomainUrl = environment.localApiDomain
  private baseApiUrl = environment.loginApiUrl
  private baseUrl = this.baseDomainUrl + this.baseApiUrl

  userLogin(userInfo: userLoginToken): Observable<any>{
    return this.http.post<any>(this.baseUrl, userInfo)
  }
}
