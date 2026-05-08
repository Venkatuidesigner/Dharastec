import { Component } from '@angular/core';
import { dummy_img, about_us, code, user, wcu } from '../../shared/globals'
import { MaterialModule } from '../../shared/material-module';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-services',
  imports: [MaterialModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  about_us = about_us;
  code = code;
  dummy_img = dummy_img;
  user = user;
  wcu = wcu;
ourServices = [
  {
    img: dummy_img,
    icon: 'fa-code',
    title: 'Custom Software Development',
    descrption: 'Scalable and secure software solutions tailored to streamline operations, automate workflows, and support business growth across industries.'
  },
  {
    img: dummy_img,
    icon: 'fa-robot',
    title: 'AI Solutions & Automation',
    descrption: 'Intelligent AI-powered systems including chatbots, workflow automation, predictive analytics, and custom AI integrations to improve efficiency and decision-making.'
  },
  {
    img: dummy_img,
    icon: 'fa-mobile-screen-button',
    title: 'Mobile App Development',
    descrption: 'High-performance Android, iOS, and cross-platform mobile applications designed for seamless user experience, scalability, and business impact.'
  },
  {
    img: dummy_img,
    icon: 'fa-globe',
    title: 'Website Design & Development',
    descrption: 'Modern, responsive, and conversion-focused websites crafted to strengthen your digital presence and engage your audience effectively.'
  },
  {
    img: dummy_img,
    icon: 'fa-pen-ruler',
    title: 'UI/UX Design',
    descrption: 'User-centric interface and experience design that combines creativity, usability, and functionality to deliver intuitive digital experiences.'
  },
  {
    img: dummy_img,
    icon: 'fa-cloud',
    title: 'Cloud & DevOps Solutions',
    descrption: 'Cloud infrastructure setup, deployment, migration, monitoring, and DevOps implementation for enhanced scalability, reliability, and security.'
  },
  {
    img: dummy_img,
    icon: 'fa-microchip',
    title: 'IoT & Hardware Integration',
    descrption: 'Smart hardware and IoT solutions including sensor integrations, device connectivity, embedded systems, and real-time monitoring platforms.'
  },
  {
    img: dummy_img,
    icon: 'fa-diagram-project',
    title: 'IT Consulting & Project Management',
    descrption: 'Strategic technology consulting, solution architecture, and end-to-end project management to ensure successful execution aligned with business objectives.'
  }
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

  steps = [
    {
      number: 1,
      title: 'Consultation',
      desc:
        'We begin by understanding your business challenges, goals and existing systems. Our team collaborates closely with you to identify key opportunities for digital solutions.',
    },
    {
      number: 2,
      title: 'Defining the Scope',
      desc:
        'Based on our discussions, we prepare a detailed scope document outlining objectives, deliverables, timelines and estimated budget. This ensures mutual clarity and alignment before development begins.',
    },
    {
      number: 3,
      title: 'Solution Development',
      desc:
        'Our development team designs and builds tailored web, mobile or cloud-based solutions, ensuring scalability, performance and user-friendliness at every stage.',
    },
    {
      number: 4,
      title: 'Demonstration & Feedback',
      desc:
        'We provide live demos at key milestones so you can visualize progress and share feedback. This iterative approach ensures the final product meets your expectations perfectly.',
    },
    {
      number: 5,
      title: 'Implementation',
      desc:
        'Once approved, the solution is deployed and integrated into your operational environment. Our experts ensure a seamless transition with minimal disruption to your business.',
    },
    {
      number: 6,
      title: 'Continuous Support',
      desc:
        'After implementation, we continue to assist with maintenance, upgrades and performance optimization ensuring your solution evolves with your business needs.',
    },
  ];
}
