import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.page.html',
  styleUrls: ['./login-patient.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class LoginPatientPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
