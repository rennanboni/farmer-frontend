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

  constructor(private farmerService: FarmerService) {
  }

  onSelectedFromRoot(farmer: Farmer) {
    console.log(`onSelectedFromRoot: ${JSON.stringify(farmer)}`);
  }
}
