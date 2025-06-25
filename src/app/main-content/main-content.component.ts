import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  imports: [
    CommonModule
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  image: string = 'mis.jpg';
  age: number = 17;

  changeImage(): void {
    if (this.image === 'mis.jpg') {
      this.image = 'mikrotik.jpg';
    } else {
      this.image = 'mis.jpg';
    }
  }

  viewDetail(): void {
    alert('Detail');
  }


  increaseAge(){
    this.age++;
  }
  decreaseAge(){
    this.age--;
  }
}
