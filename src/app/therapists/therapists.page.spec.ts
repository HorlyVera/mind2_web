import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TherapistsPage } from './therapists.page';

describe('TherapistsPage', () => {
  let component: TherapistsPage;
  let fixture: ComponentFixture<TherapistsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TherapistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
