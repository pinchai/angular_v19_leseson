import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';

interface student {
  id: number,
  name:string,
  age:number,
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  student_list: student [] = []
  name_student: string = '';
  age:number = 0;

  changeData() {
    this.student_list.push(
      {
        id: 1,
        name: this.name_student,
        age: this.age
      },
    )

    //clearForm
    this.clearForm()
  }

  clearForm(){
    this.name_student = ''
    this.age = 0
  }
}
