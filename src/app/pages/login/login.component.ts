import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, Validators, FormBuilder} from '@angular/forms'
import{ ApiService } from '../../services/api/api.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  private validationPattern =
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,}";

  login: any = {
    userName: '',
    password: ''
  }

  constructor(
    public router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password : ['',  [Validators.required, Validators.pattern(this.validationPattern)]]
    })
  }

  onLogin(){
    let l =  this.api.userLogin(this.login);
    l.subscribe(data =>{
      localStorage.setItem('userName', JSON.stringify(data.userName));
      this.api.errorsByUSer[this.login.userName] = 0;
      this.router.navigate(['home']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Inicio de sesion fue éxitoso',
        showConfirmButton: false,
        timer: 2500
      })
    })
  }

  redirect(toPage: string) {
    
    this.router.navigate([toPage]);
  }

}
