import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationMenuModule } from 'src/app/components/navigation-menu/navigation-menu.module';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavigationMenuModule]
})
export class ChatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
