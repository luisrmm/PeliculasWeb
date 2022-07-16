import { Component, HostListener } from '@angular/core';

import { Subject } from 'rxjs';
import { StorageService } from './services/helper/storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Peliculas';
  timeoutId: any;
  userActivity: any;

  userInactive: Subject<any> = new Subject();
  constructor( private storageService: StorageService ) {
    this.setTimeout();
    this.userInactive.subscribe(() => {
      storageService.logout();
    });
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 300000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
}
