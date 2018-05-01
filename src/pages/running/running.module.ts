import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunningPage } from './running';

@NgModule({
  declarations: [
    RunningPage,
  ],
  imports: [
    IonicPageModule.forChild(RunningPage),
  ],
})
export class RunningPageModule {}
