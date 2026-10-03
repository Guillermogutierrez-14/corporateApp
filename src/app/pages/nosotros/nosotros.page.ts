import { Component, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class NosotrosPage implements OnInit {

  oficinaLat = 40.4452;
  oficinaLon = -3.6115;

  distancia = signal<string>('Calculando...');

  constructor(private geolocationService: GeolocationService) {}

  async ngOnInit() {
    try {
      const coords = await this.geolocationService.getCurrentPosition();
      const km = this.calcularDistancia(
        coords.latitude,
        coords.longitude,
        this.oficinaLat,
        this.oficinaLon
      );
      this.distancia.set(km.toFixed(2) + ' km');
       } catch (error: any) {
      console.error('Error de geolocalización:', error);
      this.distancia.set('Error: ' + (error?.message ?? error));
    }
  }

  calcularDistancia(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

}