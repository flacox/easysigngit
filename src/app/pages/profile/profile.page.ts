import { Component, OnInit } from '@angular/core';
import { ComunidadService } from '../../services/comunidad.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  usuario: any = {};
  publicacionesUsuario: any[] = [];
  
  constructor(
    private comunidadService: ComunidadService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    // Obtener datos del usuario del localStorage
    const userString = localStorage.getItem('user');
    if (userString) {
      this.usuario = JSON.parse(userString);
      this.cargarPublicacionesUsuario();
    }
  }

  async cargarPublicacionesUsuario() {
    const loading = await this.loadingController.create({
      message: 'Cargando publicaciones...'
    });
    await loading.present();

    this.comunidadService.getPublicacionesConFiltro('usuario', this.usuario.name)
      .subscribe(
        (publicaciones) => {
          this.publicacionesUsuario = publicaciones;
          loading.dismiss();
        },
        (error) => {
          console.error('Error al cargar publicaciones:', error);
          loading.dismiss();
        }
      );
  }
}

