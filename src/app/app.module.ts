import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AacExampleModule } from 'projects/aac-example/src/lib/aac-example.module';
import { AacLibraryModule } from 'projects/aac-library/src/public-api';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowcaseAacExampleComponent } from './showcase/showcase-aac-example/showcase-aac-example.component';
import { ShowcaseAacPipeJoinComponent } from './showcase/showcase-aac-pipe-join/showcase-aac-pipe-join.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseAacExampleComponent,
    ShowcaseAacPipeJoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AacExampleModule,
    AacLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
