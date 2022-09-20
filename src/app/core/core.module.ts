import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    // HomepageComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    // HomepageComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
