import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.page.html',
  styleUrls: ['./lesson5.page.scss'],
})
export class Lesson5Page implements OnInit {

  constructor(private navCtrl: NavController) { }
  
    irAPantalla(ruta: string) {
      this.navCtrl.navigateRoot(ruta); // Cierra la pantalla actual y abre la nueva
    }
    
  ngOnInit() {
  }

}
