import { NgModule } from '@angular/core';
import { AacJoinPipeModule } from '../pipes/aac-join-pipe/aac-join-pipe.module';
import { AacLibraryComponent } from './aac-library.component';



@NgModule({
  declarations: [
    AacLibraryComponent
  ],
  imports: [
    AacJoinPipeModule
  ],
  exports: [
    AacLibraryComponent
  ]
})
export class AacLibraryModule { }
