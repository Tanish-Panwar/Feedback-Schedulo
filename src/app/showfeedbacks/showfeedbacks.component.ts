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
    this.getStudents();
  }

  // A function to show feedbacks only for the logged in student
  showFeedbacks(login: Login){
    if(login.email == localStorage.getItem('email')){
      return true;
    }
    else {
      return false;
    }
  }


  getStudents(){
    if(this.showFeedbacks(JSON.parse(localStorage.getItem('login')))){
      this.studentService.getStudents().subscribe((res) => {
        this.studentService.students = res as Student[];
      });
    }
    // else{
    //   window.location.href = '/';
    // }

  }


}




// Role based = AdminBase, educatorBase, user(EventBase)

// Pseudo Code:

// Admin:
// if Local storage.login.getitem("Role") === Admin:
// showALl

// Educator:
// if Local Local storage.login.getitem("Role") === Educator:
// Search for educator name show Feedbacks.

// User: 
// if Local storage.login.getitem("Role") === null || "":
// Search for event show feedbacks related to event.