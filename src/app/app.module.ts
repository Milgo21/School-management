import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { BalanceFilterPipe } from './balance-filter.pipe';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsDetailsComponent,
    BalanceFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
