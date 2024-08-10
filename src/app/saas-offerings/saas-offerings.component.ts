import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-saas-offerings',
  standalone: true,
  imports: [TabViewModule,FooterComponent],
  templateUrl: './saas-offerings.component.html',
  styleUrl: './saas-offerings.component.css'
})
export class SaasOfferingsComponent {

}
