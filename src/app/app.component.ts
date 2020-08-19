import {Component} from '@angular/core';

import {FarmerService} from './service/farmer.service';
import {Farmer} from './model/Farmer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'farmer-frontend';

  farmerAsString: string;

  constructor(private farmerService: FarmerService) {
  }

  onSelectedFromRoot(farmer: Farmer) {
    this.farmerAsString = JSON.stringify(farmer);
  }
}
