import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapHomeComponent} from './components/map-home/map-home.component';
import {MapAddressComponent} from './components/map-address/map-address.component';
import {MapComponent} from './components/map/map.component';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'hide'
    })
  ],
  declarations: [
    MapHomeComponent,
    MapAddressComponent,
    MapComponent
  ],
  exports: [
    MapHomeComponent
  ]

})
export class MapModule {
}
