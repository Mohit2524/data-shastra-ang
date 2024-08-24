import { CommonModule } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive,DialogModule],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }


 
  constructor(private router: Router) { }

  closeDialog(): void {
    this.visible = false;
  }

  // navigateTo(route: string): void {
  //   this.router.navigate([route]);
  //   this.closeDialog();
  // }


  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeNavbar();
      }
    });
  }

  closeNavbar(): void {
    const checkbox = document.getElementById('check') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
  
 
 

 

}
