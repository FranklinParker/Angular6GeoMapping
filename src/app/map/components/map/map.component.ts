import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MapService} from '../../service/map.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  lat = 40.7931022;
  lng = -74.4768575;
  isPositionError = false;
  location: string;
  sub: Subscription;

  constructor(private mapService: MapService,
              private ref: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.sub = this.mapService.getLocationObservable()
      .subscribe((location: string) => {
        this.location = location;
        this.setMapLocation();
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onMapReady() {

  }

  private setMapLocation() {
    if (!this.location || this.location.trim().length === 0) {
      return;
    }
    this.mapService.geocodeLocation(this.location)
      .subscribe((coord) => {
          console.log('got coord', coord);
          this.lat = coord.lat;
          this.lng = coord.lng;
          this.ref.detectChanges();
        },
        (err) => {
          this.isPositionError = true;
          this.ref.detectChanges();
        });

  }

}
