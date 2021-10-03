import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../../data.service';
import flatpickr from "flatpickr";

@Component({
  selector: 'app-forms-elements',
  templateUrl: './forms-elements.component.html',
  styleUrls: ['./forms-elements.component.css']
})
export class FormsElementsComponent implements OnInit {
  data: any;
  error_code: any;
  error_message: any;
  constructor(private activeRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.error_code="0";
    this.error_message="";     
    
    const fp = flatpickr("#pick", {
      enableTime: true,
      dateFormat: "m/d/Y H:i",
    }); 
        
    this.activeRoute.data.subscribe(({ 
      data })=> { 
      this.data=data;
    })   
  }
  
  postForm() {
    this.dataService.postForm("simple-form", this.data).subscribe((data:any)=>{
      if (data.error_code=="0") {
        this.error_code=0;
        this.error_message="Wallet Added Successfully";
      } else {
        this.router.navigate(['/v'])        
      }
    });
  }

}