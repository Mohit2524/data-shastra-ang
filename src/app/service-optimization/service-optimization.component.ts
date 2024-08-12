import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-service-optimization',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './service-optimization.component.html',
  styleUrl: './service-optimization.component.css'
})
export class ServiceOptimizationComponent {
  products: any[] = [
    {
      image: 'Vector (1).svg',
      title: 'Enhanced Operational Efficiency”',
      description: 'Optimization streamlines processes, reduces waste, and ensures that resources are used in the most effective manner.'
    },
    {
      image: 'tabler-icon-archery-arrow.svg',
      title: 'Improved Decision-Making',
      description: 'With advanced mathematical modeling and analytics, optimization helps businesses make informed decisions that are data-driven and strategic.'
    },
    {
      image: 'tabler-icon-coin.svg',
      title: 'Cost Reduction',
      description: 'By identifying inefficiencies and improving resource allocation, optimization significantly cuts costs and boosts profitability.'
    },
    {
      image: 'tabler-icon-trending-up.svg',
      title: 'Increased Competitiveness',
      description: 'Optimization equips businesses with the tools to stay ahead by adapting more quickly and efficiently to market demands.'
    },
    {
      image: 'tabler-icon-chart-arrows.svg',
      title: 'Scalability And Flexibility',
      description: 'Optimization solutions are designed to scale and adapt, allowing businesses to grow and evolve without sacrificing performance or efficiency.'
    }
 
    
  ];
}
