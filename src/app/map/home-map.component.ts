import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule, MapInfoWindow } from '@angular/google-maps';

export interface Marker {
  key: string;
  position: { lat: number; lng: number };
  popup: {
    title: string;
    photoUrl: string;
    countRecords: number;
    link: string;
  };
}
@Component({
  selector: 'app-home-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.scss'],
})
export class HomeMapComponent implements OnInit, AfterViewInit {
  cordsMarkers: Marker[] = [
    {
      key: 'marker1',
      position: { lat: 50.4501, lng: 30.5234 },
      popup: {
        title: 'с. Крячківка, Полтавська обл.',
        photoUrl: './assets/img/home/kiivImg.jpg',
        countRecords: 20,
        link: '#',
      },
    },
    {
      key: 'marker2',
      position: { lat: 49.8397, lng: 24.0297 },
      popup: {
        title: 'м. Львів, Львівська обл.',
        photoUrl: './assets/img/home/kiivImg.jpg',
        countRecords: 16,
        link: '#',
      },
    },
    {
      key: 'marker3',
      position: { lat: 48.5132, lng: 32.2597 },
      popup: {
        title: 'м. Кропівницький, Черкаська обл.',
        photoUrl: './assets/img/home/kiivImg.jpg',
        countRecords: 7,
        link: '#',
      },
    },
    {
      key: 'marker4',
      position: { lat: 46.4833, lng: 30.7326 },
      popup: {
        title: 'м. Одеса, Одеська обл.',
        photoUrl: './assets/img/home/kiivImg.jpg',
        countRecords: 30,
        link: '#',
      },
    },
    {
      key: 'marker5',
      position: { lat: 48.6198, lng: 22.301 },
      popup: {
        title: 'м. Ужгород, Закарпатська обл.',
        photoUrl: './assets/img/home/kiivImg.jpg',
        countRecords: 15,
        link: '#',
      },
    },
  ];

  selectedMarkerKey: string | null = null;
  showInfoWindow = false;

  @ViewChild('mymap') mapElement: any;
  map!: google.maps.Map;

  markers = [
    {
      key: 'marker1',
      position: new google.maps.LatLng(50.4501, 30.5234),
      map: this.map,
      popup: {
        title: 'с. Крячківка, Полтавська обл.',
        photoUrl: './assets/img/home/kiivImg.jpg',
        countRecords: 20,
        link: '#',
      },
    },
    {
      key: 'marker2',
      position: new google.maps.LatLng(49.8397, 24.0297),
      map: this.map,
      popup: {
        title: 'м. Львів, Львівська обл.',
        photoUrl: './assets/img/home/kiivImg.jpg',
        countRecords: 16,
        link: '#',
      },
    },
    {
      key: 'marker3',
      position: new google.maps.LatLng(48.5132, 32.2597),
      map: this.map,
      popup: {
        title: 'м. Кропівницький, Черкаська обл.',
        photoUrl: './assets/img/home/kiivImg.jpg',
        countRecords: 7,
        link: '#',
      },
    },
    {
      key: 'marker4',
      position: new google.maps.LatLng(46.4833, 30.7326),
      map: this.map,
      popup: {
        title: 'м. Одеса, Одеська обл.',
        photoUrl: './assets/img/home/kiivImg.jpg',
        countRecords: 30,
        link: '#',
      },
    },
    {
      key: 'marker5',
      position: new google.maps.LatLng(48.6198, 22.301),
      map: this.map,
      popup: {
        title: 'м. Ужгород, Закарпатська обл.',
        photoUrl: './assets/img/home/kiivImg.jpg',
        countRecords: 15,
        link: '#',
      },
    },
  ];

  coordinates = new google.maps.LatLng(50.4501, 30.5234);

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // google.maps.Map
  }

  ngAfterViewInit(): void {
    console.log(this.mapElement.nativeElement);
    const mapProperties = {
      center: new google.maps.LatLng(48.379433, 31.165579),
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );

    this.marker.setMap(this.map);
    this.marker.addListener('mapClick', (event: any) => {
      console.log(event);
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle(),
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    this.markers.forEach((markerInfo) => {
      const marker = new google.maps.Marker({ ...markerInfo });
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle(),
      });
      marker.addListener('click', () => {
        infoWindow.open(marker.getMap(), marker);
      });
      marker.setMap(this.map);
      console.log(infoWindow);
    });
  }

  onMarkerClick(key: string) {
    this.selectedMarkerKey = key;
    this.showInfoWindow = true;
  }

  onCloseInfoWindow(): void {
    this.showInfoWindow = false;
    this.selectedMarkerKey = null;
  }

  getCustomMarkerIcon(key: string): google.maps.Icon {
    return {
      url:
        this.selectedMarkerKey === key
          ? './assets/img/home/icons/place-hover.svg'
          : './assets/img/home/icons/place.svg',
      scaledSize: new google.maps.Size(56, 56),
    };
  }
}
