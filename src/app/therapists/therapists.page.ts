import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.page.html',
  styleUrls: ['./therapists.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TherapistsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
