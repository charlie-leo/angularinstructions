import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxEchartsModule} from "ngx-echarts";
import { RatingStarComponent } from './ratingStar/rating-star/rating-star.component';
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import { MapChartComponent } from './mapChart/map-chart/map-chart.component';
import { CircularImageComponent } from './circular-image/circular-image.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingStarComponent,
    MapChartComponent,
    CircularImageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
