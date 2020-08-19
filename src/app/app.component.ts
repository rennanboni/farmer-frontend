import {Component} from '@angular/core';

import {FarmerService} from './service/farmer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'farmer-frontend';

  constructor(private farmerService: FarmerService) {
  }
}
