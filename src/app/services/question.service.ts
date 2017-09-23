import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionService {

  constructor(private http:Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' +
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphcGhlckBzaW5nbmV0LmNvbS5zZyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiUGFtZWxhIExpdSIsInBpY3R1cmUiOiJodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS92Mi41LzEwMjA5NjI1MDgwOTczOTcxL3BpY3R1cmU_dHlwZT1sYXJnZSIsImlzcyI6Imh0dHBzOi8vcGFtZWxhbGltLmF1dGgwLmNvbS8iLCJzdWIiOiJmYWNlYm9va3wxMDIwOTYyNTA4MDk3Mzk3MSIsImF1ZCI6ImVWSnY2VUZNOUdWZHVrQldpVVJjelJDeG1iNmlhVVlHIiwiZXhwIjoxNTA2MDkyNDM4LCJpYXQiOjE1MDYwNTY0Mzh9.XQYNiCPPT95KrsKhW0wZa6Wrp_WUKqPplrBbHvXKUyE"); 
  }
  getQuestions(): Observable<Question[]> {
      let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get('http://localhost:8000/api/protected', {
      headers: headers
    })
    .map((response: Response) => response.json().my_questions);
  }
}