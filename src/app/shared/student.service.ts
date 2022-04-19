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
  
}
