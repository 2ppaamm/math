import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService} from '../../services/question.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ag-question-list',
  templateUrl: './question-list.component.html',
  styles: []
})
export class QuestionListComponent implements OnInit {
  
  questions: Observable<Question[]>;

  selectedQuestion: Question;
  
  @Output() questionSelect: EventEmitter<Question> = new EventEmitter<Question>();
  
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }
  onSelect(question: Question) {
    this.questionSelect.emit(question);
  }
}