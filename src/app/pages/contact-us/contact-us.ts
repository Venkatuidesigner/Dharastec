import { Component } from '@angular/core';
import { dummy_img, dummy_img_1} from '../../shared/globals'

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  dummy_img_1= dummy_img_1;
  dummy_img= dummy_img;
  ourServices = [
    { img: dummy_img, icon: 'fa-user-tie', title: 'Visit Us Daily', descrption: 'End-to-end technology solutions that include development, support, and consulting to keep your business running smoothly.' },
    { img: dummy_img, icon: 'fa-mobile-screen-button', title: 'Call US', descrption: 'From idea to launch, we build innovative digital products tailored to your business goals.' },
    { img: dummy_img, icon: 'fa-brands fa-square-whatsapp', title: 'Whatsapp', descrption: 'Modern, user-friendly designs that blend creativity with functionality to enhance user experience.' },
    { img: dummy_img, icon: 'fa-envelope', title: 'Email Us', descrption: 'Hire us your way — choose a complete project package or hourly-based hiring that fits your needs.' },
  ]
}
