import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeQuizPage } from './home-quiz.page';

describe('HomeQuizPage', () => {
  let component: HomeQuizPage;
  let fixture: ComponentFixture<HomeQuizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
