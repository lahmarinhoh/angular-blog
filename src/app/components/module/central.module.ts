import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from '../big-card/big-card.component';
import { SmallCardComponent } from '../small-card/small-card.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../menu-title/menu-title.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    MenuTitleComponent
  ],
  exports: [
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    MenuTitleComponent]
})
export class CentralModule { }
