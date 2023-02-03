import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReparoPageRoutingModule } from './reparo-routing.module';
import { ReparoPage } from './reparo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReparoPageRoutingModule
  ],
  declarations: [ReparoPage]
})
export class ReparoPageModule {}
