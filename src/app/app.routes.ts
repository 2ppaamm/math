import { Routes, RouterModule } from "@angular/router";
import { QuestionbankComponent } from './questionbank/questionbank.component';
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
  { path: '', redirectTo:'/math', pathMatch: 'full'},
  { path: 'math', component: QuestionbankComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);