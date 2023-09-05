import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMapsModule } from '@angular/google-maps';

import { HomeMapComponent } from './home-map.component';

describe('HomeMapComponent', () => {
  let component: HomeMapComponent;
  let fixture: ComponentFixture<HomeMapComponent>;
  let google: GoogleMapsModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeMapComponent, GoogleMapsModule],
    });
    google = TestBed.inject(GoogleMapsModule);
    (window as any).google = google;

    fixture = TestBed.createComponent(HomeMapComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
