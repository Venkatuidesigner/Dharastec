import { Component } from '@angular/core';
import { MaterialModule } from '../material-module';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MaterialModule, NgClass, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
