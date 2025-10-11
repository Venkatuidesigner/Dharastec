import { Component } from '@angular/core';
import { about_us, code, dummy_img, user } from '../../shared/globals'
import { MaterialModule } from '../../shared/material-module';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-about-us',
  imports: [MaterialModule, NgFor],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {
  about_us = about_us;
  code = code;
  dummy_img = dummy_img;
  user = user;

  ourServices = [
    { icon: 'fa-computer', title: 'IT Services', descrption: 'End-to-end technology solutions that include development, support, and consulting to keep your business running smoothly.' },
    { icon: 'fa-mobile-screen-button', title: 'Product Development', descrption: 'From idea to launch, we build innovative digital products tailored to your business goals.' },
    { icon: 'fa-pen-ruler', title: 'Creative Designing', descrption: 'Modern, user-friendly designs that blend creativity with functionality to enhance user experience.' },
    { icon: 'fa-laptop', title: 'Flexible Engagement', descrption: 'Hire us your way — choose a complete project package or hourly-based hiring that fits your needs.' },
  ]
  inDustries = [
    { icon: 'fa-user-doctor', title: 'Healthcare', descrption: 'Built secure platforms for appointment booking, telemedicine, and patient data management.' },
    { icon: 'fa-coins', title: ' Finance & FinTech', descrption: 'Engineered secure fintech apps, digital wallets, and real-time analytics dashboards.' },
    { icon: 'fa-shop', title: 'Retail & E-commerce', descrption: 'Created scalable online stores, inventory systems, and personalized shopping experiences.' },
    { icon: 'fa-building', title: 'Real Estate', descrption: 'Built custom CRM tools, property listing portals, and 3D walkthrough platforms.' },
  ]
  status = [
    { label: 'Happy Clients', value: 100, count: 0, suffix: '+' },
    { label: 'Completed Projects', value: 30, count: 0, suffix: '+' },
    { label: 'Poster Designs', value: 50, count: 0, suffix: '+' },
    { label: 'Video Edited', value: 30, count: 0, suffix: '+' },
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
