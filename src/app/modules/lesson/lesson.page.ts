import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {
  lessonId: string = '';
  firebaseService = inject(FirebaseService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.lessonId = this.route.snapshot.paramMap.get('id') || '';
  }


  signOut(){
    this.firebaseService.signOut();
  }
}
