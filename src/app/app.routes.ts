import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path:'welcome',
    loadComponent: () => import('./pages/welcome/welcome.page').then( m => m.WelcomePage),
  }, 
  {
    path:'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage),
  },
  {
    path: 'login-patient',
    loadComponent: () => import('./pages/login-patient/login-patient.page').then( m => m.LoginPatientPage)
  },
  {
    path: 'login-therapist',
    loadComponent: () => import('./pages/login-therapist/login-therapist.page').then( m => m.LoginTherapistPage)
  },
  {
    path: 'sign-up-patient',
    loadComponent: () => import('./pages/sign-up-patient/sign-up-patient.page').then( m => m.SignUpPatientPage)
  },
  {
    path: 'sign-up-therapist',
    loadComponent: () => import('./pages/sign-up-therapist/sign-up-therapist.page').then( m => m.SignUpTherapistPage)
  },
  {
    path: 'therapists',
    loadComponent: () => import('./pages/therapists/therapists.page').then( m => m.TherapistsPage)
  },
  {
    path: 'plans',
    loadComponent: () => import('./pages/plans/plans.page').then( m => m.PlansPage)
  },
  {
    path: 'schedule',
    loadComponent: () => import('./pages/schedule/schedule.page').then( m => m.SchedulePage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'my-account',
    loadComponent: () => import('./pages/my-account/my-account.page').then( m => m.MyAccountPage)
  },
  {
    path: 'navigation-menu',
    loadComponent: () => import('./components/navigation-menu/navigation-menu.component').then( m => m.NavigationMenuComponent)
  }
 
    
];
