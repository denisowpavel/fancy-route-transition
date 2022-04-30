import { Component } from '@angular/core';
import {ChildrenOutletContexts, RouterOutlet} from '@angular/router';
import { slideInAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  public getRouteAnimationData(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] || null;
  }
}
