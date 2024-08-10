import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive,DialogModule],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isCollapsed = true;

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }


  closeDialog() {
    this.visible = false;
  }


}
