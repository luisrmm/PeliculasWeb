import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { SingI } from '../../models/sing-in.interface';
import { ResponLI } from '../../models/responseLogin.interface';
import {HttpClient,} from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://localhost:44349/api/Users/";
  errorMessageApi = "";
  contError = 0;

  errorsByUSer: any = {}


  constructor(private http: HttpClient) { }

  userLogin(login: LoginI): Observable<ResponLI>{
    return this.http.post<ResponLI>(this.url + "Login", login).pipe(
      catchError(err => this.catchLoginError(err, login.userName)),
    )
  }

  userSingIn(sing: SingI): Observable<SingI>{
    return this.http.post<SingI>(this.url + "SingIn", sing).pipe(
      catchError(err => this.catchSingInError(err)),
    )
  }

  catchLoginError(error: any, uid: string): Observable<any>{
    if (error && error.error && error.error.message){
      this.errorMessageApi = error.error.error;
    }else if( error && error.message){
      this.errorMessageApi = error.error;
    }else{
      this.errorMessageApi = error;
    }
    if(this.errorMessageApi == 'Su usuario se encuentra inactivo, por favor comuníquese con el administrador.'){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: this.errorMessageApi,
      })
      return throwError(() => new Error(error.map));
    }
    if(this.errorMessageApi == 'Contraseña incorrectos.' ){
      this.errorsByUSer[uid] = (this.errorsByUSer[uid] || 0) + 1
    }
    if(this.errorsByUSer[uid] >= 3){
      this.http.put(this.url + "Desactived", {userName: uid});
    }
    console.log(this.errorMessageApi);
    console.log(this.errorsByUSer);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: "Usuario y/o contraseña incorrectos.",
    })
    return throwError(() => new Error(error.map));
  }


  catchSingInError(error: any ): Observable<any>{
    if (error && error.error && error.error.message){
      this.errorMessageApi = error.error.error;
    }else if( error && error.message){
      this.errorMessageApi = error.error;
    }else{
      this.errorMessageApi = error;
    }
    console.log(this.errorMessageApi);
    console.log(this.errorsByUSer);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: this.errorMessageApi,
    })
    return throwError(() => new Error(error.map));
  }
}
