import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  async guardarMensaje(correo: string, mensaje: string): Promise<void> {
    await Preferences.set({
      key: 'ultimoMensaje',
      value: JSON.stringify({ correo, mensaje })
    });
  }

}