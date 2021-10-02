import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {
  dashboard: any;
  samplePages: any;
  UiElements: any;
  forms: any; 
  tables: any;
  charts: any;
  icons: any; 
  maps: any;
  multilevel: any;
  level12: any;
  myServer: any; 
  assets: any;

  constructor() { }

  ngOnInit(): void {
    this.dashboard='N';
    this.samplePages='N';
    this.UiElements='N';
    this.forms='N';
    this.tables='N';
    this.charts='N';
    this.icons='N';
    this.maps='N';
    this.multilevel='N';
    this.level12='N';
    this.assets='N';
    this.myServer = "https://mistpt4.fps.dhs.gov";
  }

  toggleDashboard() {
    if (this.dashboard=="N") {
      this.dashboard="Y";
    } else {
      this.dashboard="N";
    }
  }

  toggleAssets() {
    if (this.samplePages=="N") {
      this.samplePages="Y";
    } else {
      this.samplePages="N";
    }
  }

  toggleUiElements() {
    if (this.UiElements=="N") {
      this.UiElements="Y";
    } else {
      this.UiElements="N";
    }
  }

  toggleForms() {
    if (this.forms=="N") {
      this.forms="Y";
    } else {
      this.forms="N";
    }
  }

  
}
