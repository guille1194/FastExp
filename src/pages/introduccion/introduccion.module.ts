import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Introduccion } from './introduccion';

@NgModule({
  declarations: [
    Introduccion,
  ],
  imports: [
    IonicPageModule.forChild(Introduccion),
  ],
})
export class IntroduccionModule {}
