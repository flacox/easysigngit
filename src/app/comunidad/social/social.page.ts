import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage {

  isGuest: boolean = false;

  utilsService = inject(UtilsService);
  firebaseService = inject(FirebaseService);



  //La función valida si en el localstorage está 'user' o está 'guest
  ngOnInit(){
    const guest = this.utilsService.getLocalStorage('guest');
    if(guest){
      this.isGuest = true;
  }else{
    this.isGuest = false;
  }
  }

  signOut(){
    this.firebaseService.signOut();
  }



   // Arreglo de publicaciones
   posts = [
    {
      id: 1,
      username: 'Usuario1',
      title: 'Título de ejemplo',
      content: 'Este es el contenido de la publicación.',
      imageUrl: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',  // Cambia esta URL si deseas mostrar una imagen
    },
    {
      id: 2,
      username: 'Usuario2',
      title: 'Otra publicación',
      content: 'Contenido adicional',
      imageUrl: null,  // Si no hay imagen, lo puedes dejar como null
    },
    {
      id: 1,
      username: 'Usuario1',
      title: 'Título de ejemplo',
      content: 'Este es el contenido de la publicación.',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',  // Cambia esta URL si deseas mostrar una imagen
    },
    {
      id: 2,
      username: 'Usuario2',
      title: 'Otra publicación',
      content: 'Contenido adicional',
      imageUrl: null,  // Si no hay imagen, lo puedes dejar como null
    },
    {
      id: 1,
      username: 'Usuario1',
      title: 'Título de ejemplo',
      content: 'Este es el contenido de la publicación.',
      imageUrl: 'https://picsum.photos/200/300/?blur',  // Cambia esta URL si deseas mostrar una imagen
    },
    {
      id: 2,
      username: 'Usuario2',
      title: 'Otra publicación',
      content: 'Contenido adicional',
      imageUrl: null,  // Si no hay imagen, lo puedes dejar como null
    },
    {
      id: 1,
      username: 'Usuario1',
      title: 'Título de ejemplo',
      content: 'Este es el contenido de la publicación.',
      imageUrl: 'https://img.freepik.com/vector-gratis/alfabeto-lenguaje-signos_23-2147868580.jpg?t=st=1735494534~exp=1735498134~hmac=4c1038d52fb6f7c5a18c072f0a70d5b85d6212e14e37d940d2747885b17c0786&w=740',  // Cambia esta URL si deseas mostrar una imagen
    },
    {
      id: 2,
      username: 'Usuario2',
      title: 'Otra publicación',
      content: 'Contenido adicional',
      imageUrl: null,  // Si no hay imagen, lo puedes dejar como null
    }
  ];


  // Método para abrir los comentarios de una publicación
  openComments(postId: number) {
    console.log('Abrir comentarios para el post con ID:', postId);
    // Aquí puedes agregar la lógica para abrir los comentarios, como navegar a otra página o abrir un modal
  }

  constructor() { }



  


}


