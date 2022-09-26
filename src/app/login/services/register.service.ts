import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserAccount } from 'src/app/shared/models/userAccount';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http : HttpClient) { }
  baseDomainUrl = environment.localApiDomain;
  baseApiUrl = environment.registerApiUrl
  baseUrl = this.baseDomainUrl + this.baseApiUrl
  createNewAccount(userAccountInfo : UserAccount): any{
    const apiUrl = "/createNewAccount";
    const finalUrl = this.baseUrl + apiUrl
    return this.http.post<any>(finalUrl,userAccountInfo)
  }
}
