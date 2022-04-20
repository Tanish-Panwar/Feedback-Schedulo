import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [StudentService]
})
export class LoginComponent implements OnInit {

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.resetForm();
  }


  // Reset function
  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.studentService.logins = {
      email: '',
      password: '',
      role: '',
      name: '',
      event: ''
    }
  }


  // Login function
  onSubmit(form: NgForm){
    this.studentService.loginStudent(form.value).subscribe((res) => {
      if(res){
        window.location.href = "/send-feedbacks";
        // Storing the user's data in local storage just for testing, and getting the user's data from the database
        localStorage.setItem('email', res[0].email);
        localStorage.setItem('role', res[0].role);
        localStorage.setItem('name', res[0].name);
        localStorage.setItem('event', res[0].event);
      }
      else {
        window.location.href = "/";
      }
    });
  }

}
