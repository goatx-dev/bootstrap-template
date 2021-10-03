import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tables-basic',
  templateUrl: './tables-basic.component.html',
  styleUrls: ['./tables-basic.component.css']
})
export class TablesBAsicComponent implements OnInit {

  data: any;
  id: any;
  fullPriceData: any = [];
  term: any;
  p: any;

  constructor(private activeRoute: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {        
    this.activeRoute.data.subscribe(({ 
      data })=> { 
      this.data=data;
    })   
  }
}