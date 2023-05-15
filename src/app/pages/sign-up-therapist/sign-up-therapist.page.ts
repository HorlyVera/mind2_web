import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sign-up-therapist',
  templateUrl: './sign-up-therapist.page.html',
  styleUrls: ['./sign-up-therapist.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SignUpTherapistPage implements OnInit {
  dateExample = new Date().toISOString();
  constructor() { }

  ngOnInit() {
  }

}
