import { Component, OnInit } from '@angular/core';
import { Student, Login } from '../shared/student.model';
import { StudentService } from '../shared/student.service'; 

@Component({
  selector: 'app-showfeedbacks',
  templateUrl: './showfeedbacks.component.html',
  styleUrls: ['./showfeedbacks.component.css'],
  providers: [StudentService]
})
export class ShowfeedbacksComponent implements OnInit {
  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    // Checking if role is admin or educator. else it will be a user.
    if(localStorage.getItem('role') == "Admin"){
      this.getStudents();
      console.log("All");
    }
    if(localStorage.getItem('role') == "Educator"){
      this.getStudentsByEducatorName();
      console.log(localStorage.getItem('name'));
      console.log("By Educator Name");
    }
    else {
      this.getStudentsByEvent();
      console.log("By Student Event Attended");
      console.log(localStorage.getItem('event'));
    }
  }



  // For Admin
  getStudents(){
    this.studentService.getStudents().subscribe((res) => {
      this.studentService.students = res as Student[];
    });

  }


  // For Users
  getStudentsByEvent(){
    this.studentService.getStudentsByEvent().subscribe((res) => {
      this.studentService.students = res as Student[];
    });
  }


  // For Educators.
  getStudentsByEducatorName(){
    this.studentService.getStudentsByEducatorName().subscribe((res) => {
      this.studentService.students = res as Student[];
    });
  }




}