import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'ag-questionbank',
  templateUrl: './questionbank.component.html',
  styleUrls: ['./questionbank.component.css']
})
export class QuestionbankComponent implements OnInit {

  selectedQuestion: Question;

  constructor() { }

  ngOnInit() {
  }
  selectQuestion(question: Question) {
    this.selectedQuestion = question;
  }

}
