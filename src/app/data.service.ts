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
      this.url='https://deepgoat.com/api/router.php';
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

  getData(path: any, id: any, id2: any, id3: any) {
    this.getLocalStorage();
    const data = {
      "q" : path,
      "id": id,
      "id2": id2,
      "id3": id3,      
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

  postData(path: any, formData: any[]) {
    this.getLocalStorage();
    const data = {
      "q" : path,
      "data": formData,      
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

}
