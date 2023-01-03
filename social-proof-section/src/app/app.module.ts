import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingCardComponent } from './rating-card/rating-card.component';
import { TestimonyCardComponent } from './testimony-card/testimony-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingCardComponent,
    TestimonyCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
