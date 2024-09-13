import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { GetInfoComponent } from '../get-info/get-info.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-service-ml-pipeline',
  standalone: true,
  imports: [CarouselModule,GetInfoComponent,FooterComponent],
  templateUrl: './service-ml-pipeline.component.html',
  styleUrl: './service-ml-pipeline.component.css'
})
export class ServiceMLPipelineComponent {
  products: any[] = [
    {
      image: 'tabler-icon-arrow-merge-alt-right.svg',
      title: 'Seamless Integration',
      description: 'Integrating a successful solution ensures that the benefits of AI-ML initiatives are distributed across the organization, from frontline operations to strategic decision-making.'
    },
    {
      image: 'tabler-icon-transform.svg',
      title: 'Dynamic Adaptation',
      description: 'To meet the constantly evolving business environments the ML pipeline facilitates the continuous monitoring of model performance, allowing for quick identification of deviations in data patterns.'
    },
    {
      image: 'tabler-icon-brand-laravel.svg',
      title: 'Effortless Model Management',
      description: 'Effortless swapping, updating, and management of ML models without extensive redevelopment or downtime.'
    },
    {
      image: 'tabler-icon-chart-arrows.svg',
      title: 'Scalability And Efficiency',
      description: 'AI-ML solutions that can scale with your business, handling increasing volumes of data and complex computations without sacrificing performance or accuracy.'
    }
  ];
}
