import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user.model';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])

  })


  ngOnInit() {
  }

  // Acá se realiza la suscripción de los datos obtenidos del form
  async submit() {
    if (this.form.valid) {

      const loading = await this.utilsService.loading();

      await loading.present()

      this.firebaseService.signIn(this.form.value as User)
        .then(resp => {
          //Acá se hace la redirección a la siguiente página
          //Por medio del utilsService y el routerlink creado dentro de aquel servicio
          this.utilsService.routerlink('/home')
          //Obtiene la información al momento de tener una respuesta en base al uid
          this.getUserInfo(resp.user.uid);
          //Acá muestra un toast por si hubo un error
        }).catch(error => {
          console.log(error);
          this.utilsService.presentToast({
            message: 'Error ocurrido:' + error.message,
            duration: 2500,
            color: 'danger',
            position: 'bottom',
            icon: 'alert-circle-outline'
          })
          //Acá se finaliza el spinner
        }).finally(() => {
          loading.dismiss();
        })
    }

  }

  //Obtener info del usuario una vez logeado
  async getUserInfo(uid: string) {
    if (this.form.valid) {
      const loading = await this.utilsService.loading();

      await loading.present();
      let path = `users/${uid}`;

      this.firebaseService.getDocument(path)
        .then((user: User) => {
          //Acá se almacenca en el local storage  
          this.utilsService.saveLocalStorage('user', user);

          //Acá se hace la redirección a la siguiente página
          //Por medio del utilsService y el routerlink creado dentro de aquel servicio
          this.utilsService.routerlink('/home');
          this.form.reset();

          //Acá se muestra el toast (mensaje abajo de bienvenida en este caso) proveniente de
          //UtilsService para que así se pueda usar en diferentes componentes de ser el caso
          this.utilsService.presentToast({
            message: `Bienvenido ${user.name}`,
            duration: 1500,
            color: 'primary',
            position: 'bottom',
            icon: 'person-circle-outline'
          })
          //Acá muestra un toast por si hubo un error
        }).catch(error => {
          console.log(error);
          this.utilsService.presentToast({
            message: 'Error ocurrido: ' + error.message,
            duration: 2500,
            color: 'danger',
            position: 'bottom',
            icon: 'alert-circle-outline'
          })
          //Acá se finaliza el spinner
        }).finally(() => {
          loading.dismiss();
        })
    }
  }

}
