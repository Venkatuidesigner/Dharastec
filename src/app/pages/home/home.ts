import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../shared/material-module';
import { dummy_img } from '../../shared/globals'
@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None
})
export class Home {
  dummy_img = dummy_img;
  ourServices = [
    {img:dummy_img, title: 'IT Services', descrption:'End-to-end technology solutions that include development, support, and consulting to keep your business running smoothly.', icon: dummy_img},
    {img:dummy_img, title: 'Product Development', descrption:'From idea to launch, we build innovative digital products tailored to your business goals.', icon: dummy_img},
    {img:dummy_img, title: 'Creative Designing', descrption:'Modern, user-friendly designs that blend creativity with functionality to enhance user experience.', icon: dummy_img},
    {img:dummy_img, title: 'Flexible Engagement', descrption:'Hire us your way — choose a complete project package or hourly-based hiring that fits your needs.', icon: dummy_img},
  ]
}
