
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-get-info',
  standalone: true,
  imports: [ MatFormFieldModule,MatInputModule,CommonModule,MatButtonModule,MatFormField,FormsModule,ReactiveFormsModule],
  templateUrl: './get-info.component.html',
  styleUrl: './get-info.component.css'
})
export class GetInfoComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      localStorage.setItem('formData', JSON.stringify(formData));
      console.log('Form Data Saved:', formData);
      
      this.form.reset();
    }
  }
  
}
