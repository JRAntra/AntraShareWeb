import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ValidateRegisterService {

  constructor(private http: HttpClient) { }

  baseDomainUrl = environment.localApiDomain
  baseApiUrl = environment.registerApiUrl
  baseUrl = this.baseDomainUrl + this.baseApiUrl
  
  checkEmailValid(email : string) : Observable<boolean> {
    const apiUrl = "/checkExistByEmail/"
    const finalUrl = this.baseUrl + apiUrl + email
    return this.http.get<boolean>(finalUrl);
  }
}
