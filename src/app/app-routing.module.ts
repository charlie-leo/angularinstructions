import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RatingStarComponent} from "./ratingStar/rating-star/rating-star.component";
import {AppComponent} from "./app.component";
import {MapChartComponent} from "./mapChart/map-chart/map-chart.component";
import {CircularImageComponent} from "./circular-image/circular-image.component";


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'rating', component: RatingStarComponent },
  { path: 'mapChart', component: MapChartComponent },
  { path: 'circularImg', component: CircularImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
