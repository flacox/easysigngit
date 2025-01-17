import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {
  private collectionName = 'publicaciones';

  constructor(private firestore: AngularFirestore) { }

   // Obtener todas las publicaciones
   getPublicaciones(): Observable<any[]> {
    return this.firestore
      .collection(this.collectionName, (ref) => ref.orderBy('fecha', 'desc'))
      .valueChanges({ idField: 'id' });
  }

  // Agregar nueva publicación
  addPublicacion(publicacion: { nombreUsuario: string; titulo: string; contenido: string; fecha: Date }) {
    return this.firestore.collection(this.collectionName).add(publicacion);
  }
  // comentarios.
  getComentariosCount(publicacionId: string): Promise<number> {
    return this.firestore
      .collection('comentarios', ref => ref.where('publicacionId', '==', publicacionId))
      .get()
      .toPromise()
      .then(snapshot => snapshot.size);
  }
}
