import {Component, OnInit} from '@angular/core';
import {EChartsOption} from "echarts";
import * as echarts from 'echarts';
// @ts-ignore
import * as worldmap from 'src/assets/africa.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'angularCharts';


  ngOnInit(): void {

  }




}
