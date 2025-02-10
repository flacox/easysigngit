import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseService = inject(FirebaseService);

    constructor(private navCtrl: NavController) {}

  ngOnInit() { 
  }

  irAPantalla(ruta: string) {
    this.navCtrl.navigateRoot(ruta); // Cierra la pantalla actual y abre la nueva
  }

  // Función cerrar sesión
  signOut(){
    this.firebaseService.signOut();
  }

}
