import {  Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SaasOfferingsComponent } from './saas-offerings/saas-offerings.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { CasestudyDataDrivenComponent } from './casestudy-data-driven/casestudy-data-driven.component';
import { RouteOptimizationComponent } from './route-optimization/route-optimization.component';
import { DishaComponent } from './disha/disha.component';
import { VehiclePerformanceComponent } from './vehicle-performance/vehicle-performance.component';
import { TransportationSpendComponent } from './transportation-spend/transportation-spend.component';
 export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashbaord',
    pathMatch: 'full',
  },


  { path: 'dashboard', component: DashboardComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'saas-offerings', component: SaasOfferingsComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'case_study', component: CaseStudiesComponent },
  { path: 'contact_us', component: ContactUSComponent },
  {path: 'Data-driven Engagement', component:CasestudyDataDrivenComponent},
  {path: 'Route-Optimization', component: RouteOptimizationComponent},
  {path: 'Disha', component: DishaComponent},
  {path:'Vehicle-Performance', component: VehiclePerformanceComponent},
  {path:'Transportation-Spend', component: TransportationSpendComponent}

  
];