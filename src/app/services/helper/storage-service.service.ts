import {Injectable} from "@angular/core";
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private sessionStorageService;
  private currentSession : any = null;

  constructor(private router: Router) {
    this.sessionStorageService = sessionStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: any): void {
    this.currentSession = session;
    this.sessionStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): any{
    var sessionStr = this.sessionStorageService.getItem('currentUser');
    return (sessionStr) ? <any> JSON.parse(sessionStr): null;
  }

  getCurrentSession(): any {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.sessionStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  };

  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }

}
