import { Component } from '@angular/core';
import { dummy_img } from '../../shared/globals'
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [NgClass, NgFor, RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  dummy_img = dummy_img

  ourServices = [
    { img: dummy_img, icon: 'fa-computer', title: 'IT Services', descrption: 'End-to-end technology solutions that include development, support, and consulting to keep your business running smoothly.' },
    { img: dummy_img, icon: 'fa-mobile-screen-button', title: 'Product Development', descrption: 'From idea to launch, we build innovative digital products tailored to your business goals.' },
    { img: dummy_img, icon: 'fa-pen-ruler', title: 'Creative Designing', descrption: 'Modern, user-friendly designs that blend creativity with functionality to enhance user experience.' },
    { img: dummy_img, icon: 'fa-laptop', title: 'Flexible Engagement', descrption: 'Hire us your way — choose a complete project package or hourly-based hiring that fits your needs.' },
  ]

  filter: 'All Projects' | 'Government' | 'Private' | 'Websites' = 'All Projects';
  // ✅ Define 10 sample projects here
  projects = [
    { title: 'Chaandi Jewelery', type: 'Private' },
    { title: 'Asset Management', type: 'Private' },
    { title: 'Eka Lyf Hotel', type: 'Private' },
    { title: 'TNSTA', type: 'Government' },
    { title: 'Omni Bus', type: 'Government' },
    { title: 'Agri App', type: 'Government' },
    { title: 'Chaandi Jewelery', type: 'Websites' },
    { title: 'Asset Management', type: 'Websites' },
    { title: 'Eka Lyf Hotel', type: 'Websites' },
  ];


  get filteredProjects() {
    return this.filter === 'All Projects'
      ? this.projects
      : this.projects.filter(p => p.type === this.filter);
  }
}
