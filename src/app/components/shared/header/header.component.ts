import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { HelperService } from 'src/app/services/helper/helper.service';
import { StorageService } from 'src/app/services/helper/storage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  textoDeInput: string = '';
  isAuthenticated: boolean = false;
  userChanges: Observable<boolean> | undefined;
  // 5 minutes to miliseconds is 300000
  MILIS_TIME_OUT = 300000

  constructor(
    public router: Router,
    private api: ApiService,
    private helper: HelperService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.storageService.isAuthenticated();
    console.log("On changes", this.isAuthenticated);
  }

  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
      this.helper.setMessageA(this.textoDeInput);
    }
  }

  redirect(toPage: string) {

    this.router.navigate([toPage]);
  }

  logOut() {
    this.storageService.logout();
  }

}
