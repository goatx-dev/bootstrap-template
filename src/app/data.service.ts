import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  t: any;
  uid: any;
  url: any;
  un: any;
  role: any;

  constructor(private http: HttpClient) { 
      this.url='https://deepgoat.com/api/data.facilitylist.php';
  
    }

  getLocalStorage() {
    //
    if (localStorage.getItem('uid')===null) {
      this.uid="";
    } else {
      this.uid=localStorage.getItem('uid')
    }

    if (localStorage.getItem('un')===null) {
      this.un="";
    } else {
      this.un=localStorage.getItem('un')
    }

  }

  getBuildingList() {
    this.getLocalStorage();
    const data = {
      "q" : "get.building.data",      
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

}
