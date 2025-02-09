import { Component, inject, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @Input() nombreUsuario: string = 'Invitado';
  private intervalId: any;

  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private menuController: MenuController) { }

  closeMenu() {
    this.menuController.close();
  }
  //Se ejecuta cuando el componente se inicializa
  ngOnInit() {
    this.updateUser();
    this.intervalId = setInterval(() => {
      this.updateUser();
    }, 5000); 
  }
// Metodo que se ejecuta cuando el componente se destruye
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

// Metodo para actualizar el nombre del usuario
  updateUser() {
    //Obtengo usuario logeado
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.nombreUsuario = user.name || 'Invitado';
    } else {
      // Si no hay un usuario almacenado, asigna 'Invitado' como valor predeterminado
      this.nombreUsuario = 'Invitado';
    }
  }

// Inyecto el servicio de Firebase para manejar la autenticacion
  firebaseService = inject(FirebaseService);

  //cerrar sesion
  signOut() {
    this.firebaseService.signOut();
  }
}
