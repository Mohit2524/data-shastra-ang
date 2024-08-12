import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-service-ai-ml-based-solution',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './service-ai-ml-based-solution.component.html',
  styleUrl: './service-ai-ml-based-solution.component.css'
})
export class ServiceAIMLBasedSolutionComponent {
  products: any[] = [
    {
      image: 'tabler-icon-border-all.svg',
      title: 'Multiple Models, No "One-Size-Fits-All”',
      description: 'We employ a diverse range of models to craft tailored solutions that address the nuances of individual challenges effectively.'
    },
    {
      image: 'tabler-icon-target-arrow.svg',
      title: 'Quick Turnaround For Decision-Making',
      description: 'Prototypes provide tangible results quickly, enabling management to make informed decisions about further investments in their ML journey with confidence.'
    },
    {
      image: 'tabler-icon-brand-samsungpass.svg',
      title: 'Informed Investment',
      description: 'Understand the strengths and limitations of data and potential solutions to strategically allocate resources, thus ensuring better return on investment'
    },
    {
      image: 'tabler-icon-alert-triangle.svg',
      title: 'Risk Mitigation',
      description: 'Before committing significant resources to full-scale AI-ML implementation, prototyping offers a cost-effective way to understand what works, what doesn’t, and why.'
    },
 
  ];
}
