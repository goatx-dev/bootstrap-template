import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.css']
})
export class HorizontalMenuComponent implements OnInit {
  data: any;
  selection: any=[];
  constructor(private activeRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.selection[0]="N";
    this.selection[1]="N";
    this.selection[2]="N";
    this.selection[3]="N";
    this.selection[4]="N";
    this.selection[5]="N";
    this.selection[6]="N";
    this.selection[7]="N";
    this.selection[8]="N";
    this.selection[9]="N";            
    this.activeRoute.data.subscribe(({ 
      menudata })=> { 
      this.data=menudata;
    })   
  }
  toggle(id: any) {
     if (this.selection[id]=='Y') {
       this.selection[id]='N';
     } else {
       this.selection[id]='Y';
     }
  }
}