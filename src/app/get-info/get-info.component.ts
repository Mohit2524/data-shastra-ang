
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';



@Component({
  selector: 'app-get-info',
  standalone: true,
  imports: [ MatFormFieldModule,MatInputModule,CommonModule,MatButtonModule,MatFormField],
  templateUrl: './get-info.component.html',
  styleUrl: './get-info.component.css'
})
export class GetInfoComponent {

  
}
