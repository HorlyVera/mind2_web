import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPatientPage } from './login-patient.page';

describe('LoginPatientPage', () => {
  let component: LoginPatientPage;
  let fixture: ComponentFixture<LoginPatientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
