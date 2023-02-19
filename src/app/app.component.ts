import { Component } from '@angular/core';
import { StudentsDetailsComponent } from './students-details/students-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileManagement';
}
export interface Student {
  name: string;
  balance: number;
}


