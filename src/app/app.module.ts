import {routes} from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { QuestionbankComponent } from './questionbank/questionbank.component';
import { QuestionListComponent } from './questionbank/question-list/question-list.component';
import { QuestionComponent } from './questionbank/question-list/question.component';
import { QuestionService } from './services/question.service';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionbankComponent,
    QuestionListComponent,
    QuestionComponent,
    QuestionDetailComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
