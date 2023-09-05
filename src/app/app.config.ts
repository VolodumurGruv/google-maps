import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), GoogleMap],
};
