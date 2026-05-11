import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalculaMedia } from './app-calcula-media';

describe('AppCalculaMedia', () => {
  let component: AppCalculaMedia;
  let fixture: ComponentFixture<AppCalculaMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCalculaMedia],
    }).compileComponents();

    fixture = TestBed.createComponent(AppCalculaMedia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
