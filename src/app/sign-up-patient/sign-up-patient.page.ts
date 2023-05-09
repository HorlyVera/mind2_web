import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sign-up-patient',
  templateUrl: './sign-up-patient.page.html',
  styleUrls: ['./sign-up-patient.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SignUpPatientPage implements OnInit {
  dateExample = new Date().toISOString();
  constructor() { }

  ngOnInit() {
  }

}
