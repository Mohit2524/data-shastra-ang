import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PhilosophyComponent } from "./philosophy/philosophy.component";
import { HeaderComponent } from "./header/header.component";
import { ServicesComponent } from "./services/services.component";
import { TeckStackComponent } from "./teck-stack/teck-stack.component";
import { CaseStudiesComponent } from "./case-studies/case-studies.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CasestudyDataDrivenComponent } from './casestudy-data-driven/casestudy-data-driven.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhilosophyComponent, HeaderComponent, ServicesComponent, TeckStackComponent, CaseStudiesComponent,DashboardComponent, CommonModule,MatInputModule,MatFormFieldModule,CasestudyDataDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataShastra.io';
}
