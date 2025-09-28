import { Component } from '@angular/core';
import { MaterialModule } from '../material-module';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { logo } from '../../shared/globals'
@Component({
  selector: 'app-header',
  imports: [MaterialModule, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
mobileMenuOpen = false;
logo = logo;
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
