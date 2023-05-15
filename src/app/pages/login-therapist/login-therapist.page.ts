import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-therapist',
  templateUrl: './login-therapist.page.html',
  styleUrls: ['./login-therapist.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LoginTherapistPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
