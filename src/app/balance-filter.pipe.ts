import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './app.component';

@Pipe({
  name: 'balanceFilter'
})
export class BalanceFilterPipe implements PipeTransform {

  transform(students: Student[], balance: string): Student[] {
    if (balance === 'positive') {
      return students.filter(student => student.balance > 0);
    } else if (balance === 'zero') {
      return students.filter(student => student.balance === 0);
    } else {
      return students;
    }
  }

}
