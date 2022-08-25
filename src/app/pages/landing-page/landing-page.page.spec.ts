import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPagePage } from './landing-page.page';

describe('LandingPagePage', () => {
  let component: LandingPagePage;
  let fixture: ComponentFixture<LandingPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPagePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
