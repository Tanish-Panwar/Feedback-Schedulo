import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service'; 

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {
  // educatorName: "Pablo";
  // eventName: "AdvanceDSA"

  constructor(public studentService: StudentService) {}

  // Calling functions when our entry point hits.
  ngOnInit(): void {
    this.resetForm();
    this.getStudents();
  }
  
  // Range functions for the slider.
  arr = ['😶', '😐', '🙂', '😀', '😍'];
  getSliderValue(event: any){
    var text = document.querySelector('#box-text');
    text.innerHTML = this.arr[event.target.value-1];
  }

  getSliderValue1(event: any){
    var text = document.querySelector('#box-text1');
    text.innerHTML = this.arr[event.target.value-1];
  }

  getSliderValue2(event: any){
    var text = document.querySelector('#box-text2');
    text.innerHTML = this.arr[event.target.value-1];
  }

  getSliderValue3(event: any){
    var text = document.querySelector('#box-text3');
    text.innerHTML = this.arr[event.target.value-1];
  }




  // RESET FORM BUTTON FUNCTION.
  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.studentService.selectedStudent = {
      educatorname: '',
      eventname: '',
      eventque: [ {eventrange: '1', knowledge: '', exp: '', futureimv: '', futurethings: '', organized: '', recommendev: '1'}],
      educatorque: [{educatorrange: '1', knowledgeofed: '', teaching: '', futureimvofed: '', organizeded: '', futuretopics: '', recommended: '1'}]
    }
  }


  // Add Student Feedback Button Function. Linked with submit in students.component.html.
  onSubmit(form: NgForm){
    this.studentService.postStudent(form.value).subscribe((res) => {
      this.resetForm(form);
      this.getStudents();
      alert('Feedback added successfully');
    });
    
  }

  // Getting students when onSumbit is called.
  getStudents(){
    this.studentService.getStudents().subscribe((res) => {
      this.studentService.students = res as Student[];
    });
  }

  // Hide button if the logged in user is a student
  isStudent() {
    if(localStorage.getItem('role') == '') {
      return true;
    }
    else {
      return false;
    }
  }

  // Enable Submit button for form if the logged in user is a student. 
  isOnlyStudent() {
    if(localStorage.getItem('role') == ''){
      return false;
    }
    else return true;
  }


  // Removing items from local storage.
  onLogout() {
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    localStorage.removeItem('event');
    window.location.href = '/';
  }


}
