import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Student, Login } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent: Student;
  students: Student[];
  logins: Login;
  readonly baseURL = 'http://localhost:3000/api/sample';
  readonly loginURL = 'http://localhost:3000/api/login/log';
  readonly getStudentsByEventURL = 'http://localhost:3000/api/login/feed';
  readonly getStudentsByEducatorNameURL = 'http://localhost:3000/api/login/feedevent';
  
  constructor(private http: HttpClient) { }

  loginStudent(login: Login){
    return this.http.post(this.loginURL, login);
  }

  postStudent(student: Student){
    return this.http.post(this.baseURL, student);
  }

  getStudents(){
    return this.http.get(this.baseURL);
  }

  getStudentsByEvent(){
    return this.http.post(this.getStudentsByEventURL, {event: localStorage.getItem('event')});
  }

  getStudentsByEducatorName(){
    return this.http.post(this.getStudentsByEducatorNameURL, {name: localStorage.getItem('name')});
  }

}
