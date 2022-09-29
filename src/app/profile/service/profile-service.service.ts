import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http: HttpClient) { }

  getProfileByUsername(name: string): Observable<any>{
    return this.http.get<any>("http://localhost4231/api/users/getProfile/" + name)
  }
}
