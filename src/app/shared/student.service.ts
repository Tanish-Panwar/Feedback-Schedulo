// Don't change this file IMP file.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, Login } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Selected student is nothing but the student Model.
  selectedStudent: Student;
  // Adding all the students feedback in an array of Type Student.
  students: Student[];
  // For getting only unique values fron the array, we use this set for getting the feedbacks according to the educator name.
  educatornameset = new Set<string>();

  logins: Login;

  // Links from the backend.
  readonly baseURL = 'http://localhost:3000/api/sample'; // Getting and submitting feedbacks.
  readonly loginURL = 'http://localhost:3000/api/login/log'; // Logging in.
  readonly getStudentsByEventURL = 'http://localhost:3000/api/login/feed'; // Getting only STudent event.
  readonly getStudentsByEducatorNameURL = 'http://localhost:3000/api/login/feedevent'; // Educator name.
  
  // HTTP Client for getting and posting data.
  constructor(private http: HttpClient) { }

  // Logging in.
  loginStudent(login: Login){
    return this.http.post(this.loginURL, login);
  }

  // Submitting feedbacks.
  postStudent(student: Student){
    return this.http.post(this.baseURL, student);
  }

  // Getting all the feedbacks.
  getStudents(){
    return this.http.get(this.baseURL);
  }

  // Getting feedbacks by student event.
  getStudentsByEvent(){
    return this.http.post(this.getStudentsByEventURL, {event: localStorage.getItem('event')});
  }

  // Getting feedbacks by student event that takes a string as an input parameter.
  getStudentsByEducatorName(){
    return this.http.post(this.getStudentsByEducatorNameURL, {name: localStorage.getItem('name')});
  }

  // Getting feedbacks by educator name that takes a string as an input parameter.
  getFeedbacksByEducatorName( name: string){
    return this.http.post(this.getStudentsByEducatorNameURL, {name: name});
  }

}
