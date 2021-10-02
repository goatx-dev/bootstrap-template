import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

//--
//-- This is a single resolver application that calls a single API with a parameter that tells the 
//-- API what data to return.
//--
@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<boolean> {

  r: any;
  path: any;
  id: any;
  id2: any;
  id3: any;

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      //--
      //-- In order to use a single resolver and data service for all queries we manually 
      //-- parse the url and pass the path and parameters to the data service.
      //--
      this.path = '';
      this.id='';
      this.id2='';
      this.id3='';
      if (route.url!==undefined) {
        //--
        //-- url[0] identifies the component.  if it is undefined, you are at the root.
        //-- 
        if (route.url[0]!==undefined) {
          if (route.url[0].path!==undefined) {
            this.path = route.url[0].path;
          }
        }
        //--
        //-- url[1] identifies the first parameter, if any.  if it is undefined, there are no parameters.
        //-- 
        if (route.url[1]!==undefined) {
          if (route.url[1].path!==undefined) {
           this.id=route.url[1].path; 
          }
        }
        if (route.url[2]!==undefined) {
          if (route.url[2].path!==undefined) {
            this.id2=route.url[2].path;
          }
        }
        if (route.url[3]!==undefined) {
          if (route.url[3].path!==undefined){
            this.id3=route.url[3].path;
          }
        }
      }
     
    this.r=this.dataService.getData(this.path, this.id, this.id2, this.id3).pipe(catchError(err=> 
      { 
        console.log(err);
        return of(null);
      }));
      console.log(this.r);
    return (this.r)
  }
}