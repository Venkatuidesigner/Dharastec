import { Component } from '@angular/core';
import { dummy_img} from '../../shared/globals'

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  ourServices = [
    { img: dummy_img, icon: 'fa-computer', title: 'IT Services', descrption: 'End-to-end technology solutions that include development, support, and consulting to keep your business running smoothly.' },
    { img: dummy_img, icon: 'fa-mobile-screen-button', title: 'Product Development', descrption: 'From idea to launch, we build innovative digital products tailored to your business goals.' },
    { img: dummy_img, icon: 'fa-pen-ruler', title: 'Creative Designing', descrption: 'Modern, user-friendly designs that blend creativity with functionality to enhance user experience.' },
    { img: dummy_img, icon: 'fa-laptop', title: 'Flexible Engagement', descrption: 'Hire us your way — choose a complete project package or hourly-based hiring that fits your needs.' },
  ]

}
