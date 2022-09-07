import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginUserPanelComponent } from './components/login-page/login-user-panel/login-user-panel.component';
import { LoginLogoPanelComponent } from './components/login-page/login-logo-panel/login-logo-panel.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    LoginUserPanelComponent,
    LoginLogoPanelComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[

  ]
})
export class LoginModule { }
