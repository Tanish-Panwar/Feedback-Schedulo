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
  // Don't change this. 
  constructor(public studentService: StudentService) { }
  

  // Calling all the required functions when our entry point hits.
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
    if(localStorage.getItem('role') == ""){
      this.getStudentsByEvent();
      console.log("By Student Event Attended");
      console.log(localStorage.getItem('event'));
    }

    if(!localStorage.getItem('email') || localStorage.getItem('role') == ""){
      window.location.href = '/';
    }
  }


  // Adding Educator names in Set
  addEducatornamesinSet(students: Student[]){
    for(let student of students){
      this.studentService.educatornameset.add(student.educatorname);
    }
  }





  // Get Students Feedbacks for Admin.
  getStudents(){
    // From the shared class.
    this.studentService.getStudents().subscribe((res) => {
      this.studentService.students = res as Student[];
      this.addEducatornamesinSet(this.studentService.students);
    }); 
  }


  

  // Getting Students by Event Attended: 
  // Removed the button of show feedbacks, and this function can be used in future.
  getStudentsByEvent(){
    this.studentService.getStudentsByEvent().subscribe((res) => {
      this.studentService.students = res as Student[];
    });
  }


  // Getting students feedbacks by educator name.
  // Change this if gives error
  getStudentsByEducatorName(){
    this.studentService.getStudentsByEducatorName().subscribe((res) => {
      this.studentService.students = res as Student[];
    });
  }



  
  // For Getting Feedback by Educator Name 
  getFeedbacksByEducatorName( name: string){
    this.studentService.getFeedbacksByEducatorName(name).subscribe((res) => {
      this.studentService.students = res as Student[];
    });
  }


  // Checking if the logged in user is an Educator.
  isEducator(){
    if(localStorage.getItem('role') == "Educator"){
      return true;
    }
    else{
      return false;
    }
  }

  // Checking if the logged in user is an Admin.
  isAdmin(){
    if(localStorage.getItem('role') == "Admin"){
      return true;
    }
    else{
      return false;
    }
  }



}