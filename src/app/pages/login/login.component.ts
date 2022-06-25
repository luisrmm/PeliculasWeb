import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cards = [
    {
      description: 'lorem isuem',
      imagen: 'assets/poster1.jpg',
      title: 'Préstamo',
      button: 'Ver más',
      toPage: 'admin/menu-config/tasa-interes',
    },
    {
      description: 'lorem isuem',
      imagen: 'assets/poster1.jpg',
      title: 'Tipo de cambio',
      button: 'Ver más',
      toPage: 'admin/menu-config/tipo-cambio',
    },
    {
      description: 'lorem isuem',
      imagen: 'assets/poster1.jpg',
      title: 'Registrar Administrador',
      button: 'Ver más',
      toPage: 'admin/menu-config/sing-in-admin',
    },
    {
      description: 'lorem isuem',
      imagen: 'assets/poster1.jpg',
      title: 'Nivel de endeudamiento',
      button: 'Ver más',
      toPage: 'admin/menu-config/nivel-endeudamiento',
    },
    {
      description: 'lorem isuem',
      imagen: 'assets/poster1.jpg',
      title: 'Automatización de tramitador',
      button: 'Ver más',
      toPage: 'admin/menu-config/automatizaion',
    },
  ];


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  redirect(toPage: string) {
    
    this.router.navigate([toPage]);
  }

}
