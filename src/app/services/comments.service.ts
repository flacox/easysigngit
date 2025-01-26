import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private firestore: AngularFirestore) {}

  // Obtener comentarios de una publicación
  getComments(publicacionId: string) {
    return this.firestore
      .collection('publicaciones')
      .doc(publicacionId)
      .collection('comments', (ref) => ref.orderBy('fecha', 'asc'))
      .valueChanges({ idField: 'id' });
  }

  // Agregar un nuevo comentario
  addComment(publicacionId: string, comment: any) {
    return this.firestore
      .collection('publicaciones')
      .doc(publicacionId)
      .collection('comments')
      .add(comment);
  }
}
