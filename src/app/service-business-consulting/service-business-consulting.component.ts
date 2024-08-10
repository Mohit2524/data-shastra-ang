import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-service-business-consulting',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './service-business-consulting.component.html',
  styleUrl: './service-business-consulting.component.css'
})
export class ServiceBusinessConsultingComponent {
  products: any[] = [
    {
      image: 'tabler-icon-go-game.svg',
      title: 'Analytics Strategy And Plan',
      description: 'Map out a strategic analytics journey tailored for specific business needs. Implement solutions that scale with future growth.'
    },
    {
      image: 'tabler-icon-file-report.svg',
      title: 'Fundraising And Proposal Development',
      description: 'Elevate fundraising efforts with strategic consulting services, designed to craft compelling proposals that resonate with investors and stakeholders.'
    },
    {
      image: 'tabler-icon-layout-grid-add.svg',
      title: 'Technology Integration And Third-Party Tools',
      description: 'Integrating third-party analytics tools, not limited to Google and AWS, for enhancing capabilities and insights'
    },
    {
      image: 'tabler-icon-brand-asana.svg',
      title: 'Risk Management And Policy Design',
      description: 'Expertly designed management strategies to navigate risk to ensure a resilient & compliant business.'
    },
    {
      image: 'tabler-icon-building-warehouse.svg',
      title: 'Warehousing And Supply Chain Optimization',
      description: 'Setting up efficient warehousing solutions to optimize or outsourcing supply chain systems.'
    },

  ];
}
