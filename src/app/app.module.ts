import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Angular Material Module
import { MatCardModule } from '@angular/material/card';
import { ChangeColorDirective } from './shared/directives/change-color.directive';
import { HomepageComponent } from './core/components/homepage/homepage.component';
// import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { WarningDialogComponent } from './shared/components/warning-dialog/warning-dialog.component'
@NgModule({
  declarations: [
    AppComponent,
    ChangeColorDirective,
    HomepageComponent,
    // WarningDialogComponent,
    // ReversePipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // RouterModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
