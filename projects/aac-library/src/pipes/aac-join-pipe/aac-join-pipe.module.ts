import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AacJoinPipe } from './aac-join.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AacJoinPipe
  ],
  exports: [
    AacJoinPipe
  ]
})
export class AacJoinPipeModule { }
