import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CanAccessAdminGuard } from './shared/guard/can-access-admin.guard';

const routes: Routes = [
  { path: "", redirectTo:"login", pathMatch:"full"},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),

  },
  {
    path: 'newsfeed',
    loadChildren: () => import('./newsfeed/newsfeed.module').then(m => m.NewsfeedModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'setting/:username',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule),
    canActivate:[CanAccessAdminGuard]
  },

  { path: "**", component:PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
