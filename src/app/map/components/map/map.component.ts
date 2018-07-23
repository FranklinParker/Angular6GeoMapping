import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat = 0;
  lng = 0;
  isPositionError = false;
  constructor() { }

  ngOnInit() {
  }
  onMapReady(){

  }

}
