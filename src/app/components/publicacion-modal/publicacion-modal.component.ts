import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { ComunidadService } from '../../services/comunidad.service';

@Component({
  selector: 'app-publicacion-modal',
  templateUrl: './publicacion-modal.component.html',
  styleUrls: ['./publicacion-modal.component.scss'],
})
export class PublicacionModalComponent  implements OnInit {
  @Input() nombreUsuario: string = 'Invitado';

  publicacion = {
    titulo: '',
    contenido: '',
    fecha: new Date(),
  };

  constructor(
    private modalController: ModalController, 
    private comunidadService: ComunidadService,
    private loadingController: LoadingController) { }

  cerrarModal() {
    this.modalController.dismiss();
  }

  async publicar() {
    if (this.publicacion.titulo && this.publicacion.contenido) {

            // Mostrar el loading
      const loading = await this.loadingController.create({
        message: 'Publicando...',
      });
      await loading.present();

            // Guardar la publicación en Firebase
      this.comunidadService.addPublicacion({
        ...this.publicacion,
        nombreUsuario: this.nombreUsuario,
      }).then(() => {
        loading.dismiss(); // Cerrar el loading
        this.cerrarModal();
      })
      ;
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  ngOnInit() {
    if (!this.nombreUsuario || this.nombreUsuario === 'Invitado') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        this.nombreUsuario = user.name || 'Invitado';
      }
    }}

}
