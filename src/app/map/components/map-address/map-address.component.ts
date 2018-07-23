import {Component, OnInit} from '@angular/core';
import {MapService} from '../../service/map.service';

@Component({
  selector: 'app-map-address',
  templateUrl: './map-address.component.html',
  styleUrls: ['./map-address.component.scss']
})
export class MapAddressComponent implements OnInit {
  street = '140 South St';
  city = 'Morristown';

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
  }

  onMapLocation() {
    const location = this.city + ', ' + this.street;
    alert(location);
    this.mapService.geocodeLocation(location)
      .subscribe((coord) => {
          console.log('got coord', coord);
        },
        (err) => {
          alert(err);
        });
  }

}
