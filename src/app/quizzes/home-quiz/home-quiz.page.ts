import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-quiz',
  templateUrl: './home-quiz.page.html',
  styleUrls: ['./home-quiz.page.scss'],
})
export class HomeQuizPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  irAPantalla(ruta: string) {
    this.navCtrl.navigateRoot(ruta); // Cierra la pantalla actual y abre la nueva
  }

  ngOnInit() {
  }

}
