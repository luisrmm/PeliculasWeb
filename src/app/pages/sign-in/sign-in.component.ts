import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ ApiService } from '../../services/api/api.service'
import{ SingI } from '../../models/sing-in.interface'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  private validationPattern =
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,}";
  singInForm!: FormGroup;
  singIn: SingI = {
    userName: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    isActive: 1
  }

  constructor(
    public router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.singInForm = this.formBuilder.group({
      userName : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      name : ['', [Validators.required, Validators.minLength(4)]],
      lastName : ['', [Validators.required , Validators.minLength(4)]],
      email : ['', [Validators.required, Validators.email]],
      password : ['',  [Validators.required, Validators.pattern(this.validationPattern)]]
    })
  }

  singInApi(){
    let s = this.api.userSingIn(this.singIn)
    s.subscribe(
      data => {
        this.router.navigate(['login']);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesion fue éxitoso',
          text: "El usuario " + data.userName + " ha sido creado con éxito"
        })
      }
    )
}

  redirect(toPage: string) {
    
    this.router.navigate([toPage]);
  }

}
