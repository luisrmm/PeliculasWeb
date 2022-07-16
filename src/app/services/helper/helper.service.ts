import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class HelperService {
    
    private messageB: string = 'Valor por defecto';
    private messageAManager: Subject<string> = new Subject<string>();
    //private messageBManager: BehaviorSubject<string> = new BehaviorSubject<String>(this.messageB);

  constructor() {}
  
  getMessageAObservable(){
    return this.messageAManager.asObservable();
  }

  /* getMessaBObservable(){
    return this.messageBManager.asObservable();
  }
 */
  setMessageA(messageA: any): void{
    this.messageAManager.next(messageA);
  }

  setMessageB(messageB: string = 'Indefinido'): void{
    this.messageAManager.next(messageB == null ? 'indefinido' : messageB);
  }

}