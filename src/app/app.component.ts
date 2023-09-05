import { Component } from '@angular/core';
import { HomeMapComponent } from './map/home-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeMapComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'maps';
}
