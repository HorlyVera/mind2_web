import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path:'welcome',
    loadComponent: () => import('./welcome/welcome.page').then( m => m.WelcomePage),
  }, 
  {
    path:'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage),
  },
  {
    path: 'login-patient',
    loadComponent: () => import('./login-patient/login-patient.page').then( m => m.LoginPatientPage)
  },
  {
    path: 'login-therapist',
    loadComponent: () => import('./login-therapist/login-therapist.page').then( m => m.LoginTherapistPage)
  },
  {
    path: 'sign-up-patient',
    loadComponent: () => import('./sign-up-patient/sign-up-patient.page').then( m => m.SignUpPatientPage)
  },
  {
    path: 'sign-up-therapist',
    loadComponent: () => import('./sign-up-therapist/sign-up-therapist.page').then( m => m.SignUpTherapistPage)
  },
  {
    path: 'therapists',
    loadComponent: () => import('./therapists/therapists.page').then( m => m.TherapistsPage)
  },
  {
    path: 'plans',
    loadComponent: () => import('./plans/plans.page').then( m => m.PlansPage)
  },
  {
    path: 'schedule',
    loadComponent: () => import('./schedule/schedule.page').then( m => m.SchedulePage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'my-account',
    loadComponent: () => import('./my-account/my-account.page').then( m => m.MyAccountPage)
  },
 
    
];
