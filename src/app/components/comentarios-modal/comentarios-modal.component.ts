import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comentarios-modal',
  templateUrl: './comentarios-modal.component.html',
  styleUrls: ['./comentarios-modal.component.scss'],
})
export class ComentariosModalComponent implements OnInit {
  @Input() publicacionId: string = '';
  @Input() publicacion: any; // Recibe la publicación completa
  comentarios: any[] = [];
  nuevoComentario: string = '';
  usuarioLogueado: string = 'Invitado';

  constructor(
    private modalController: ModalController,
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.usuarioLogueado = user.name || 'Invitado';
    }

    this.commentsService.getComments(this.publicacionId).subscribe((comments) => {
      this.comentarios = comments;
    });
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

  agregarComentario() {
    if (this.nuevoComentario.trim()) {
      const comment = {
        contenido: this.nuevoComentario,
        nombreUsuario: this.usuarioLogueado,
        fecha: new Date(), // Fecha actual
      };
  
      this.commentsService.addComment(this.publicacion.id, comment).then(() => {
        this.nuevoComentario = ''; // Limpia el campo de texto
      }).catch((error) => {
        console.error('Error al agregar comentario:', error);
      });
    }
  }
  
}
