import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowfeedbacksComponent } from './showfeedbacks/showfeedbacks.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // Add a login page and change the entrypoint to that component.
  { path: '', component: LoginComponent },
  { path: 'send-feedbacks', component: StudentsComponent },
  { path: 'show-feedbacks', component: ShowfeedbacksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShowfeedbacksComponent, StudentsComponent];