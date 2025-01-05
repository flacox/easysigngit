import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from '@angular/fire/firestore'
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);

  //Trae los datos de la sección de autenticación de la base de datos
  getAuth() {
    return getAuth();
  }

  // Trae el contenido para iniciar sesión
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // Trae el contenido para registrarse
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  updateUser(displayName: any) {
    const auth = this.getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      return updateProfile(currentUser, { displayName });
    }else {
      console.error('No hay un usuario autenticado');
      return Promise.reject(new Error('No hay un usuario autenticado'));
    }

  }

  setDocument(path: any, data: any){
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path: any){
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }
  
}
