import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
// import {MatButtonModule} from '@angular/material/button';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'pristine-bin';
  isOpen: boolean = true
  routes: string[] = ["home", "about", "pricing"]
  routeIndex = 0

  constructor(private router: Router) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  navigateForward(){
    this.isOpen = !this.isOpen;
    console.log("state: ", this.isOpen)
  
    this.routeIndex = this.routeIndex + 1

    if(this.routeIndex > this.routes.length - 1){ this.routeIndex = 0}
    this.router.navigateByUrl(this.routes[this.routeIndex])
  }

  navigateBackward(){
    this.isOpen = !this.isOpen;
    console.log("state: ", this.isOpen)
  
    this.routeIndex = this.routeIndex - 1

    if(this.routeIndex < 0 ){ this.routeIndex = this.routes.length - 1}
    this.router.navigateByUrl(this.routes[this.routeIndex])
  }
}
