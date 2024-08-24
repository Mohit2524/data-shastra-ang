
import { Component,HostListener } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-get-info',
  standalone: true,
  imports: [ MatFormFieldModule,MatInputModule,CommonModule,MatButtonModule,MatFormField,FormsModule],
  templateUrl: './get-info.component.html',
  styleUrl: './get-info.component.css'
})
export class GetInfoComponent {
    
  // formData = {
  //   name: '',
  //   phoneNumber: '',
  //   email: '',
  //   message: ''
  // };

  // constructor() {
  //   const savedInfo = localStorage.getItem('Info');
  //   if (savedInfo) {
  //     this.formData = JSON.parse(savedInfo);
  //   }
  // }

  // @HostListener('submit', ['$event'])
  // onSubmit(event: Event) {
  //   localStorage.setItem('Info', JSON.stringify(this.formData));
  // }
  
}
