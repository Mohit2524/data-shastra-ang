import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-service-data-transformation',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './service-data-transformation.component.html',
  styleUrl: './service-data-transformation.component.css'
})
export class ServiceDataTransformationComponent {
  products: any[] = [
    {
      image: 'tabler-icon-database-star.svg',
      title: 'Enhanced Data Quality',
      description: 'Elevate the accuracy and consistency of your data, making it a reliable foundation for decision-making and analytics.'
    },
    {
      image: 'tabler-icon-brand-tidal.svg',
      title: 'Streamlined Access To Insights',
      description: 'With data centralized and structured, gain faster and more comprehensive access to insights that can drive your business forward.'
    },
    {
      image: 'tabler-icon-arrows-maximize.svg',
      title: 'Scalability And Flexibility',
      description: 'Prepare your infrastructure to grow with your data needs, ensuring that as your business evolves, your data capabilities can expand seamlessly.'
    },
    {
      image: 'tabler-icon-file-text-ai.svg',
      title: 'Unlock AI And ML Potential',
      description: 'With the groundwork laid, you are now ready to explore the full spectrum of AI and ML possibilities, from predictive analytics to automated decision systems.'
    }
  ];
}
