import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material-module';
import { dummy_img } from '../../shared/globals'
@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  dummy_img = dummy_img;
}
