import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form = new FormGroup({
    uid: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
  
    })

    utilsService = inject(UtilsService);
    firebaseService = inject(FirebaseService);

    // Acá se realiza la suscripción de los datos obtenidos del form
   async submit(){
    if(this.form.valid){
  
      const loading = await this.utilsService.loading();
  
      await loading.present()
  
      this.firebaseService.signUp(this.form.value as User)
      .then(async resp =>{
        await this.firebaseService.updateUser(this.form.value.name);

        let uid = resp.user.uid;
        this.form.controls.uid.setValue(uid)
        //Función del seteo
        this.setUserInfo(uid);


  
        //Acá se muestra el toast (mensaje abajo de bienvenida en este caso) proveniente de
        //UtilsService para que así se pueda usar en diferentes componentes de ser el caso
        this.utilsService.presentToast({
          message: 'Bienvenido',
          duration: 1500,
          color: 'primary',
          position: 'bottom',
          icon: 'person-circle-outline'
        })
        //Acá muestra un toast por si hubo un error
      }).catch(error => {
        console.log(error);
        this.utilsService.presentToast({
          message: 'Error ocurrido:'+error.message,
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

    async setUserInfo(uid: string){
      if(this.form.valid){
        const loading = await this.utilsService.loading();
    
        await loading.present();
        let path= `users/${uid}`;
        //Importante, para que no se refleje la contraseña en la base de datos
        //se hace con este delete a continuación
        delete this.form.value.password;

        this.firebaseService.setDocument(path, this.form.value)
        .then(async resp =>{      
          //Acá se almacenca en el local storage  
          this.utilsService.saveLocalStorage('user', this.form.value);
  
          //Acá se hace la redirección a la siguiente página
          //Por medio del utilsService y el routerlink creado dentro de aquel servicio
          this.utilsService.routerlink('/home');
          this.form.reset();
    
          //Acá se muestra el toast (mensaje abajo de bienvenida en este caso) proveniente de
          //UtilsService para que así se pueda usar en diferentes componentes de ser el caso
          this.utilsService.presentToast({
            message: 'Bienvenido',
            duration: 1500,
            color: 'primary',
            position: 'bottom',
            icon: 'person-circle-outline'
          })
          //Acá muestra un toast por si hubo un error
        }).catch(error => {
          console.log(error);
          this.utilsService.presentToast({
            message: 'Error ocurrido: '+error.message,
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

  ngOnInit() {
  }

}
