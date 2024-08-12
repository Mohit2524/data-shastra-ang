import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-service-business-intelligent',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './service-business-intelligent.component.html',
  styleUrl: './service-business-intelligent.component.css'
})
export class ServiceBusinessIntelligentComponent {
  products: any[] = [
    {
      image: 'tabler-icon-target-arrow.svg',
      title: 'Enhanced Decision Making',
      description: 'Make decisions based on real-time data from various sources into a unified dashboard for enhanced strategic agility.'
    },
    {
      image: 'tabler-icon-eye-check.svg',
      title: 'Increased Transparency',
      description: 'Create customizable dashboards that can be accessed by different teams, fostering a transparent culture where data drives actions.'
    },
    {
      image: 'tabler-icon-clock.svg',
      title: 'Time Efficiency',
      description: 'Automate data collection and visualization process, leading to faster response times and increased productivity.'
    },
    {
      image: 'tabler-icon-graph.svg',
      title: 'Performance Monitoring',
      description: 'Track performance against key metrics and goals with tools to drill down into specific data points for deeper analysis.'
    },
    {
      image: 'tabler-icon-presentation-analytics.svg',
      title: 'Predictive Insights',
      description: 'Anticipate future trends by utilizing advanced analytics within dashboards to identify patterns and predict outcomes based on historical data.'
    }
  ];
}
