import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from './navigation-menu.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NavigationMenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [NavigationMenuComponent]
})
export class NavigationMenuModule { }
