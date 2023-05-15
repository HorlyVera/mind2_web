import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationMenuModule } from 'src/app/components/navigation-menu/navigation-menu.module';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavigationMenuModule]
})
export class MyAccountPage implements OnInit {
  dateExample = new Date().toISOString();
  constructor() { }

  ngOnInit() {
  }

}
