import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../shared/material-module';
import { dummy_img, dummy_img_1, user } from '../../shared/globals'
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [MaterialModule, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None
})
export class Home {
  dummy_img = dummy_img;
  dummy_img_1 = dummy_img_1;
  user = user;
  ourServices = [
    { img: dummy_img, icon: 'fa-computer', title: 'IT Services', descrption: 'End-to-end technology solutions that include development, support, and consulting to keep your business running smoothly.' },
    { img: dummy_img, icon: 'fa-mobile-screen-button', title: 'Product Development', descrption: 'From idea to launch, we build innovative digital products tailored to your business goals.' },
    { img: dummy_img, icon: 'fa-pen-ruler', title: 'Creative Designing', descrption: 'Modern, user-friendly designs that blend creativity with functionality to enhance user experience.' },
    { img: dummy_img, icon: 'fa-laptop', title: 'Flexible Engagement', descrption: 'Hire us your way — choose a complete project package or hourly-based hiring that fits your needs.' },
  ]

  features = [
    { title: 'Custom IT Solutions', desc: 'Tailored strategies and systems built around your unique business needs.', icon: 'fa-network-wired', class:'!bg-red-100' },
    { title: 'End-to-End Support', desc: 'From ideation to post-launch — we stay with you through every phase.', icon: 'fa-ticket', class:'!bg-gray-200' },
    { title: 'Faster Delivery', desc: 'Agile methods and optimized workflows mean quicker time to market.', icon: 'fa-globe', class:'!bg-orange-100' },
    { title: 'Scalable Technology', desc: 'Solutions designed to grow with your business and evolving goals.', icon: 'fa-server', class:'!bg-sky-100' },
    { title: 'Transparent Communication', desc: 'We keep you informed and involved at every step — no guesswork.', icon: 'fa-comments', class:'!bg-pink-100' },
    { title: 'Client-First Approach', desc: 'We align our process with your success metrics — not just deliverables.', icon: 'fa-users', class:'!bg-cyan-100' },
  ];

  testimonials = [
    {
      name: 'Rahul M',
      role: 'CTO, Nexova Tech',
      feedback: 'Working with Dhanasekar was one of the best decisions we made. Their team truly understood our needs and delivered a solution that exceeded our expectations.'
    },
    {
      name: 'Anjali S',
      role: 'Founder, RetailX',
      feedback: 'From the very first call, they felt more like a partner than a vendor. The level of dedication and transparency was refreshing — and the final product was spot on.'
    },
    {
      name: 'Vikram R',
      role: 'Operations Head, GroTech India',
      feedback: 'They delivered our app ahead of schedule, with flawless execution. Their process is clear, collaborative, and efficient. Highly recommended!'
    }
  ];
}
