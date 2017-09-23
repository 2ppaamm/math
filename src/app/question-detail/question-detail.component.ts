import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'ag-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() selectedQuestion: Question;
  constructor() { }

  ngOnInit() {
  }

}
