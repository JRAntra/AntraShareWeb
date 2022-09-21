import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { StoryListComponent } from './components/newsfeed/story-list/story-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';

import { ReversePipe } from 'src/app/shared/pipes/reverse.pipe';
import { StoryItemComponent } from './components/newsfeed/story-list/story-item/story-item.component';

import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    NewsfeedComponent,
    StoryListComponent,
    PostFormComponent,
    ReversePipe,
    StoryItemComponent
  ],
  imports: [
    CommonModule,
    NewsfeedRoutingModule,
    MatCardModule
  ]
})
export class NewsfeedModule { }
