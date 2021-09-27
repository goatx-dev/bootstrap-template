import { Component } from '@angular/core';

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showOverlay = true;
  title = 'BSA';
  constructor(public router: Router){   
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })

    this.router.events.subscribe(event => {
       if(event instanceof NavigationEnd){
           gtag('config', 'G-MVN8ZZ1GZM', 
                 {
                   'page_path': event.urlAfterRedirects
                 }
                );
        }
     }
  )}

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
     
      this.showOverlay = true;
      
    }
    if (event instanceof NavigationEnd) {

      this.showOverlay = false;
  
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }

}
