import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavigationMenuModule } from 'src/app/components/navigation-menu/navigation-menu.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NavigationMenuModule],
})
export class HomePage {

  constructor() {}
}
