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
  ngOnInit() {
    if (!this.nombreUsuario || this.nombreUsuario === 'Invitado') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        this.nombreUsuario = user.name || 'Invitado';
      }
    }
  }

  firebaseService = inject(FirebaseService);

  signOut() {
    this.firebaseService.signOut();
  }
}
