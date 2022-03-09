import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent: Student;
  students: Student[];
  readonly baseURL = 'http://localhost:3000/students';
  
  constructor(private http: HttpClient) { }

  postStudent(student: Student){
    return this.http.post(this.baseURL, student);
  }

  getStudents(){
    return this.http.get(this.baseURL);
  }

  putStudent(student: Student){
    return this.http.put(this.baseURL + `/${student._id}`, student);
  }

  deleteStudent(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  
}
