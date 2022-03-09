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

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.resetForm();
    this.getStudents();
  }

  arr = ['😶', '😐', '🙂', '😀', '😍'];
  getSliderValue(event: any){
    var text = document.querySelector('#box-text');
    text.innerHTML = this.arr[event.target.value-1];
  }




  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.studentService.selectedStudent = {
      _id: '',
      name: '',
      age: null,
      class: '',
      lorem: '',
      range: ''
    }
  }


  onSubmit(form: NgForm){
    if(form.value._id == ''){
      this.studentService.postStudent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getStudents();
        alert('Feedback added successfully');
      });
    }
    else{
      this.studentService.putStudent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getStudents();
        alert('Feedback updated successfully');
      });
    }
  }

  getStudents(){
    this.studentService.getStudents().subscribe((res) => {
      this.studentService.students = res as Student[];
    });
  }

  onEdit(student: Student){
    this.studentService.selectedStudent = student;
  }

  onDelete(_id: string){
    if(confirm('Are you sure to delete this record?') == true){
      this.studentService.deleteStudent(_id).subscribe((res) => {
        this.getStudents();
        alert('Student deleted successfully');
      });
    }
  }  


}
