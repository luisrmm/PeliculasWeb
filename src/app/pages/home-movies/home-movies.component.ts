import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css']
})
export class HomeMoviesComponent implements OnInit {

  cards = [
    {
      imagen: 'assets/poster1.jpg',
      actor1:'Pedero',
      actor2:'Jose',
      actor3:'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
      button: 'Ver más',
      toPage: 'admin/menu-config/tasa-interes',
    },
    {
      imagen: 'assets/poster1.jpg',
      actor1:'Pedero',
      actor2:'Jose',
      actor3:'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
      button: 'Ver más',
      toPage: 'admin/menu-config/tipo-cambio',
    },
    {
      imagen: 'assets/poster1.jpg',
      actor1:'Pedero',
      actor2:'Jose',
      actor3:'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
      button: 'Ver más',
      toPage: 'admin/menu-config/sing-in-admin',
    },
    {
      imagen: 'assets/poster1.jpg',
      actor1:'Pedero',
      actor2:'Jose',
      actor3:'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
      button: 'Ver más',
      toPage: 'admin/menu-config/nivel-endeudamiento',
    },
    {
      imagen: 'assets/poster1.jpg',
      actor1:'Pedero',
      actor2:'Jose',
      actor3:'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
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
