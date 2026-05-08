import { Component } from '@angular/core';
import { dummy_img, user } from '../../shared/globals'
import { MaterialModule } from '../../shared/material-module';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-about-us',
  imports: [MaterialModule, NgFor],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {
  dummy_img = dummy_img;
  user = user;
  ourServices = [
    { icon: 'fa-computer', title: 'IT Services', descrption: 'End-to-end technology solutions that include development, support, and consulting to keep your business running smoothly.' },
    { icon: 'fa-mobile-screen-button', title: 'Product Development', descrption: 'From idea to launch, we build innovative digital products tailored to your business goals.' },
    { icon: 'fa-pen-ruler', title: 'Creative Designing', descrption: 'Modern, user-friendly designs that blend creativity with functionality to enhance user experience.' },
    { icon: 'fa-laptop', title: 'Flexible Engagement', descrption: 'Hire us your way — choose a complete project package or hourly-based hiring that fits your needs.' },
  ]
  // inDustries = [
  //   { icon: 'fa-user-doctor', title: 'Healthcare', descrption: 'Built secure platforms for appointment booking, telemedicine, and patient data management.' },
  //   { icon: 'fa-coins', title: ' Finance & FinTech', descrption: 'Engineered secure fintech apps, digital wallets, and real-time analytics dashboards.' },
  //   { icon: 'fa-shop', title: 'Retail & E-commerce', descrption: 'Created scalable online stores, inventory systems, and personalized shopping experiences.' },
  //   { icon: 'fa-building', title: 'Real Estate', descrption: 'Built custom CRM tools, property listing portals, and 3D walkthrough platforms.' },
  // ]
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
  inDustries = [
    { icon: 'fa-wheat-awn', title: 'Agriculture', descrption: 'Developed digital platforms for large-scale farming and farmer management, scheme and agri-market activities for government departments.' },
    { icon: 'fa-sign-hanging', title: 'Real Estate', descrption: 'Developed custom platforms for end-to-end land procurement, construction management, and sales for government departments.' },
    { icon: 'fa-shop', title: 'Retail & E-commerce', descrption: 'Created scalable online stores along with store management systems for retail and e-commerce businesses.' },
    { icon: 'fa-building', title: 'Hospitality & Hotels', descrption: 'Delivered hotel booking and management platforms for small businesses.' },
    { icon: 'fa-truck-fast', title: 'Transport & Logistics', descrption: 'Designed systems for vehicle compliance, route planning, tracking and business operations management for government departments.' },
    { icon: 'fa-building-columns', title: 'Government Departments', descrption: 'Designed and implemented digital systems for departments handling agriculture, transport, social welfare and housing - driving large-scale digital transformation initiatives.' },
    { icon: 'fa-business-time', title: 'Small Businesses & Startups', descrption: 'Empowering SMEs with affordable websites, automation tools and cloud-based applications as per their requirements.' },
    { icon: 'fa-people-arrows', title: 'Social Welfare & NGOs', descrption: 'Developed digital platforms for welfare organizations and NGOs to streamline operations, manage beneficiaries, monitor program impact and enhance transparency in service delivery.' },
  ]
  whyChooseUs = [
    { icon: 'fa-users', title: 'Expert Team', descrption: 'Skilled professionals with proven industry experience.' },
    { icon: 'fa-laptop', title: 'Tailored Solutions', descrption: 'Custom-built services designed around your business needs.' },
    { icon: 'fa-house-laptop', title: 'Latest Technology', descrption: 'We use modern, scalable tools and frameworks.' },
    { icon: 'fa-headset', title: 'Reliable Support', descrption: 'End-to-end assistance to keep your systems running smoothly.' },
  ]
}
