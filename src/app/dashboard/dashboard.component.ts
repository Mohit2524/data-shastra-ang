import { Component } from '@angular/core';
import { PhilosophyComponent } from '../philosophy/philosophy.component';
import { HeaderComponent } from '../header/header.component';
import { CaseStudiesComponent } from "../case-studies/case-studies.component";
import { TeckStackComponent } from '../teck-stack/teck-stack.component';
import { FooterComponent } from '../footer/footer.component';
import { GetInfoComponent } from "../get-info/get-info.component";
import { SaasOfferingsComponent } from "../saas-offerings/saas-offerings.component";
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';





@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PhilosophyComponent, HeaderComponent, CaseStudiesComponent, TeckStackComponent, FooterComponent, GetInfoComponent, SaasOfferingsComponent,CarouselModule,CommonModule,TabViewModule,RouterLink,RouterLinkActive,RouterOutlet,CardModule,ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  products = [
    {
        image: 'Data-driven Engagement.svg',
        name: 'Data-Driven Engagement & Retention Success',
        route: 'Data-driven Engagement'
    },
    {
        image: 'Route-Optimization.svg',
        name: 'Route Optimization - Optimus',
        route: 'Route-Optimization'
    },
    {
        image: 'Disha.svg',
        name: 'DISHA: Light-Weight In-House Routing Solution',
        route: 'Disha'
    },
    {
        image: 'Vehicle-Performance.svg',
        name: 'Vehicle Performance/OTD Dashboard',
        route: 'Vehicle-Performance'
    },
    {
        image: 'Transportation-Spend.svg',
        name: 'Transportation Spend Analytics - Order/Cost/Trip Level Cost Analysis',
        route: 'Transportation-Spend'
    }
  ];
  



 selectedTabIndex: number = 0;

  images = [
    '/assets/ds_offerring1_optimus.png', 
    'assets/ds_offerring1.png', 
    'assets/ds_offerring1_hisaab.png', 
    'assets/ds_offerring1_thirdeye.png'  
  ];

  onTabChange(event: any) {
    this.selectedTabIndex = event.index;
  }

   
  

}
