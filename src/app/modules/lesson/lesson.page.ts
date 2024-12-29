import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {
  lessonId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.lessonId = this.route.snapshot.paramMap.get('id') || '';
  }
}
