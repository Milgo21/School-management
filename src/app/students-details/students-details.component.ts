import { Component, OnInit } from '@angular/core';
import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Student } from '../app.component';
import { StudentService } from '../student.service';
import { Student } from '../app.component';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})

export class  StudentsDetailsComponent implements OnInit {
  studentForm: FormGroup;
  students: any;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      balance: [0],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const student = this.studentForm.value;
    this.studentService.addStudent(student);
    this.studentForm.reset();
  }
  onUpdate(student: Student, newBalance: number):void {
    const index = this.students.indexOf(student);
    this.students[index].balance = newBalance;
  }

  // get students() {
  //   return this.studentService.getStudents();
  // }
}


