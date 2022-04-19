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


  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.studentService.logins = {
      email: '',
      password: '',
      role: ''
    }
  }


  onSubmit(form: NgForm){
    this.studentService.loginStudent(form.value).subscribe((res) => {
      if(res){
        window.location.href = "/send-feedbacks";
        localStorage.setItem('login', JSON.stringify(res));
      }
      else {
        window.location.href = "/";
      }
    });
  }

}
