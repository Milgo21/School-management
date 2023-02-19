import { Injectable } from '@angular/core';
import { Student } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];

  constructor() { }

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  updateBalance(student: Student, newBalance: number): void {
    const index = this.students.indexOf(student);
    this.students[index].balance = newBalance;
  }
}


