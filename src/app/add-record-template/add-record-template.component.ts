import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Globals } from 'src/app/globals';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  flatpickr  from "flatpickr";


@Component({
  selector: 'app-add-record-template',
  templateUrl: './add-record-template.component.html',
  styleUrls: ['./add-record-template.component.css']
})
export class AddRecordTemplateComponent implements OnInit {

  formData: any={};
  data: any;
  error_message: any;
  error_code: any;

  constructor(private globals: Globals, private modalService: NgbModal, private activeRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.globals.pagename = 'add-record'; 
    this.formData.REGION_ID="";
    this.formData.BUILDING_NBR="";
    this.formData.FACILITY_NAME="";
    this.formData.BUILDING_TYPE="";
    this.formData.OTHER_TYPE="";
    this.formData.ENTRY_DATE='10/25/2021';
    const fp = flatpickr("#pick", {
      enableTime: false,
      dateFormat: "m/d/Y",
    }); 
//    this.activeRoute.data.subscribe(({ 
//      data })=> { 
//      this.data=data;
//      console.log(this.data);
//    }) 
  }

  postData() {
      this.dataService.postData('add-wallet',this.formData).subscribe((data:any)=>{
        if (data.error=="0") {
          this.error_code=0;
          this.error_message="Wallet Added Successfully";
        } else {
          this.error_code=data.error
          this.error_message=data.messsage
          //this.router.navigate(['/home'])        
        }
      });
  }

}
