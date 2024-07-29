import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      image: 'Data Transformation.svg',
      title: 'Data Transformation',
      description: 'Services designed to make data ready for ML, ensuring it\'s not just data, but a potent tool for innovation and insight.'
    },
    {
      image: 'AI-ML Based.svg',
      title: 'AI-ML Based Solution Designing',
      description: 'Prototype service delivering agility and precision, empowering strategic and informed AI and ML ventures.'
    },
    {
      image: 'ML Pipeline.svg',
      title: 'ML Pipeline and Deployment',
      description: 'Services to transform proven prototypes into scalable, efficient systems for real-time insights and operational enhancements.'
    },
    {
      image: 'Optimization.svg',
      title: 'Optimization',
      description: 'Deep industry insights and advanced mathematical modelling to transform complex business problems into optimized solutions.'
    },
    {
      image: 'Business Intelligence.svg',
      title: 'BI Dashboards',
      description: 'Blending art of visualization and data-science & augmented analytics tools for clear, impactful insights.'
    },
    {
      image: 'Business Consulting.svg',
      title: 'Business Consulting',
      description: 'Expert guidance and partnership in complex analytics, to thrive through strategic foresight and operational excellence.'
    }
  ];

}