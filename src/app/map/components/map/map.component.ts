import {Component, OnDestroy, OnInit} from '@angular/core';
import {MapService} from '../../service/map.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  lat = 0;
  lng = 0;
  isPositionError = false;
  sub: Subscription;

  constructor(private mapService: MapService) {

  }

  ngOnInit() {
    this.sub = this.mapService.getLocationObservable()
      .subscribe((location: string) => {
        console.log(' got new location', location);
      });
  }
   ngOnDestroy() {
    this.sub.unsubscribe();
   }

  onMapReady() {

  }

}
