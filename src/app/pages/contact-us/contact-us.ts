import { Component } from '@angular/core';
import { dummy_img, dummy_img_1, contactus} from '../../shared/globals'

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  dummy_img_1= dummy_img_1;
  dummy_img= dummy_img;
  contactus = contactus;
  ourServices = [
    { img: dummy_img, class:'text-[#1e1d51]', icon: 'fa-user-tie', title: 'Address', descrption: 'Chennai, India.' },
    // { img: dummy_img, class:'text-[#4646fc]', icon: 'fa-mobile-screen-button', title: 'Call US', descrption: '+91 90806 75646' },
    // { img: dummy_img, class:'text-[#008000]', icon: 'fa-brands fa-square-whatsapp', title: 'Whatsapp', descrption: '+91 90806 75646' },
    { img: dummy_img, class:'text-[#ff0000]', icon: 'fa-envelope', title: 'Email Us', descrption: 'info@dharstec.com' },
  ]
}
