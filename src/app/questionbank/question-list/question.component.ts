import {Component, OnInit, Input} from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'ag-question',
  templateUrl: './question.component.html',
  styles: [`
    img {
      -webkit-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
      box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
      margin-bottom:20px;
    }

    img:hover {
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
    }
    a:hover {
      cursor:pointer;
    }
  `]
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  constructor() { }

  ngOnInit() {
  }

}