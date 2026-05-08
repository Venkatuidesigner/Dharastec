import { Component } from '@angular/core';
import { dummy_img, about_us, code, user, wcu } from '../../shared/globals'
import { MaterialModule } from '../../shared/material-module';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-services',
  imports: [MaterialModule],
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
    { img: dummy_img, icon: 'fa-computer', title: 'Website Design & Development', descrption: 'Modern, responsive and high-performing websites crafted to represent your brand and engage your audience.' },
    { img: dummy_img, icon: 'fa-mobile-screen-button', title: 'Software Development', descrption: 'Custom-built software solutions designed to automate operations and improve business efficiency.'},
    { img: dummy_img, icon: 'fa-pen-ruler', title: 'Mobile App Development', descrption: 'Native and cross-platform mobile applications developed for performance, usability and growth.'},
    { img: dummy_img, icon: 'fa-laptop', title: 'UI/UX Design', descrption: 'User-centric designs that combine creativity with functionality to deliver intuitive digital experiences.' },
    { img: dummy_img, icon: 'fa-headset', title: 'Maintenance & Support', descrption: 'Continuous monitoring, updates and performance optimization to keep your systems running smoothly.' },
    { img: dummy_img, icon: 'fa-users-gear', title: 'IT Consulting', descrption: 'Strategic consulting to align your IT systems, architecture and technology investments with business goals.' },
    { img: dummy_img, icon: 'fa-cloud', title: 'Cloud Solutions', descrption: 'Comprehensive cloud setup, migration and management for improved scalability, flexibility, and security.' },
    { img: dummy_img, icon: 'fa-diagram-project', title: 'Project Management & Monitoring', descrption: 'Comprehensive project planning, tracking and performance monitoring to ensure timely delivery, quality output and alignment with business objectives.' },
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
