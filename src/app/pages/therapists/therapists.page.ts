import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { NavigationMenuModule } from 'src/app/components/navigation-menu/navigation-menu.module';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.page.html',
  styleUrls: ['./therapists.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavigationMenuModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TherapistsPage implements OnInit {

  constructor() { }

   ngOnInit() {
}
}
