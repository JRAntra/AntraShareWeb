import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeColorDirective } from './shared/directives/change-color.directive';
import { HomepageComponent } from './core/components/homepage/homepage.component';
// import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReversePipe } from './shared/pipes/reverse.pipe'
@NgModule({
  declarations: [
    AppComponent,
    ChangeColorDirective,
    HomepageComponent,
    // ReversePipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    // RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
