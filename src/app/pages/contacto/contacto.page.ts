import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonTextarea,
  IonButton
} from '@ionic/angular';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  imports: [
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonTextarea,
    IonButton
  ]
})
export class ContactoPage {

  correo = '';
  mensaje = '';
  enviado = signal(false);

  constructor(private messagesService: MessagesService) {}

  async enviar() {
    if (!this.correo || !this.mensaje) {
      return;
    }
    await this.messagesService.guardarMensaje(this.correo, this.mensaje);
    this.enviado.set(true);
    this.correo = '';
    this.mensaje = '';
  }

}