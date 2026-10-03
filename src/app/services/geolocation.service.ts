import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  async getCurrentPosition() {
        const data = await Geolocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 30000,
      maximumAge: 60000
    });
    return data.coords;
  }

}