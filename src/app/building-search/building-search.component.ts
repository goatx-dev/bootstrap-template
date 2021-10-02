import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-building-search',
  templateUrl: './building-search.component.html',
  styleUrls: ['./building-search.component.css']
})
export class BuildingSearchComponent implements OnInit {
  id: any;
  modalTitle: any;
  modalDescription: any;
  data: any;
  wl: any;
  sort: any;
  term: any;
  p: any;
  user_transaction_type: any;

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService, private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(({ 
      data })=> { 
      console.log('DisplayMainComponent Got Data');
      this.data=data;
      console.log(this.data);
    })   
  }

  showModalPopup(id: any, desc: String, content: any)
  {
    this.id=id;
    this.modalTitle = "Modal Popup";
    this.modalDescription = desc;"";
  this.modalService.open(content, {ariaLabelledBy: 'modal'}).result.then(async (result) => {
    console.log(result);
  }, (reason) => {
    console.log(reason)
  });
  }

}
