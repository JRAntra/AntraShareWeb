import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
const routes: Routes = [
  {path:":username", component: ProfilePageComponent},
  {path:'**', component: PageNotFoundComponent}
];

//localhost:4231/profile/:username/:age  component: ProfilePageComponent

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
