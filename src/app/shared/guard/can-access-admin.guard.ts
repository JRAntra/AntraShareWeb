import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, pipe, map } from 'rxjs';
import { CheckUserProfileService } from '../service/check-user-profile.service';
@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {

  constructor(private checkUser: CheckUserProfileService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean> {

    return this.checkUser.getUserProfile(route.paramMap.get("username")!).pipe(
      map(res => {
        if (res.userRole === "admin") {
          return true;
        } else {
          return false;
        }
      })
    ) //observable 



  }

}
