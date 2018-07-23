import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-address',
  templateUrl: './map-address.component.html',
  styleUrls: ['./map-address.component.scss']
})
export class MapAddressComponent implements OnInit {
  street: string = '140 South St';
  city: string = 'Morristown';
  constructor() { }

  ngOnInit() {
  }

}
