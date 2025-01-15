import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { ComunidadService } from '../../services/comunidad.service';
import { PublicacionModalComponent } from '../../components/publicacion-modal/publicacion-modal.component';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
})
export class ComunidadPage implements OnInit {
  publicaciones: any[] = [];

  constructor(
    private comunidadService: ComunidadService,
    private modalController: ModalController,
    private loadingController: LoadingController // Inyección del LoadingController
  ) {}

  ngOnInit() {
  }

  async ionViewWillEnter() {
    // Mostrar el loading cuando se accede a la pantalla
    const loading = await this.loadingController.create({
      message: 'Cargando comunidad...',
    });
    await loading.present();

    // Cargar las publicaciones
    this.comunidadService.getPublicaciones().subscribe(
      (data) => {
        this.publicaciones = data; // Actualizar las publicaciones
        loading.dismiss(); // Cerrar el loading cuando se completen los datos
      },
      (error) => {
        loading.dismiss(); // Cerrar el loading en caso de error
        alert('Hubo un error al cargar las publicaciones.');
        console.error(error);
      }
    );
  }

  async abrirModal() {
    const usuarioLogueado = JSON.parse(localStorage.getItem('user') || '{}');
    const modal = await this.modalController.create({
      component: PublicacionModalComponent,
      componentProps: {
        nombreUsuario: usuarioLogueado.name || 'Invitado',
      },
    });
    await modal.present();
  }
  

  obtenerPublicaciones() {
    this.comunidadService.getPublicaciones().subscribe((data) => {
      this.publicaciones = data;
    });
  }
}
