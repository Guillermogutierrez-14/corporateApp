import { Component, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular';
import { Product } from '../../models/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol
  ]
})
export class ProductosPage implements OnInit {

  products = signal<Product[]>([]);

  constructor(private productsService: ProductsService) {}

  async ngOnInit() {
    const data = await this.productsService.getProducts();
    this.products.set(data);
  }

}