import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapHomeComponent} from './map/components/map-home/map-home.component';

const routes: Routes = [
  {
    path: '',
    component: MapHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
