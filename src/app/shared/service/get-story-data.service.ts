import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetStoryDataService implements Resolve<any>{

  constructor(private http: HttpClient) { }
  baseDomainUrl = environment.localApiDomain
  baseApiUrl = environment.newsApiUrl
  baseUrl = this.baseDomainUrl + this.baseApiUrl

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const apiUrl = ""
    const finalUrl = this.baseUrl + apiUrl
    console.log(finalUrl)
    return this.http.get<any>(finalUrl) 
  }
}
