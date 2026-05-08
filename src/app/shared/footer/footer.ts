import { Component } from '@angular/core';
import { MaterialModule } from '../material-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MaterialModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
