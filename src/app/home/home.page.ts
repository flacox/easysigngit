import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseService = inject(FirebaseService);

  ngOnInit() {
  }

  // Función cerrar sesión
  signOut(){
    this.firebaseService.signOut();
  }

}
