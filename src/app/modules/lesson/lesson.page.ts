import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {
  lessonId: string = '';
  firebaseService = inject(FirebaseService);

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.lessonId = this.route.snapshot.paramMap.get('id') || '';
  }

  irAPantalla(ruta: string) {
    this.navCtrl.navigateRoot(ruta); // Cierra la pantalla actual y abre la nueva
  }

}
