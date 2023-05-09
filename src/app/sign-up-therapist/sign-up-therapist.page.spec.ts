import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpTherapistPage } from './sign-up-therapist.page';

describe('SignUpTherapistPage', () => {
  let component: SignUpTherapistPage;
  let fixture: ComponentFixture<SignUpTherapistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignUpTherapistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
