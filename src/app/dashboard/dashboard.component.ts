import { Component } from '@angular/core';
import { PhilosophyComponent } from '../philosophy/philosophy.component';
import { HeaderComponent } from '../header/header.component';
import { ServicesComponent } from '../services/services.component';
import { CaseStudiesComponent } from "../case-studies/case-studies.component";
import { TeckStackComponent } from '../teck-stack/teck-stack.component';
import { FooterComponent } from '../footer/footer.component';
import { GetInfoComponent } from "../get-info/get-info.component";
import { SaasOfferingsComponent } from "../saas-offerings/saas-offerings.component";
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PhilosophyComponent, HeaderComponent, ServicesComponent, CaseStudiesComponent, TeckStackComponent, FooterComponent, GetInfoComponent, SaasOfferingsComponent,CarouselModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  products = [
    {
        image: 'Data-driven Engagement.svg',
        name: 'Data-Driven Engagement & Retention Success'
    },
    {
        image: 'Route-Optimization.svg',
        name: 'Route Optimization - Optimus'
    },
    {
        image: 'Disha.svg',
        name: 'DISHA: Light-Weight In-House Routing Solution'
    },
    {
        image: 'Vehicle-Performance.svg',
        name: 'Vehicle Performance/OTD Dashboard'
    },
    {
        image: 'Transportation-Spend.svg',
        name: 'Transportation Spend Analytics - Order/Cost/Trip Level Cost Analysis'
    }
 ];

}
