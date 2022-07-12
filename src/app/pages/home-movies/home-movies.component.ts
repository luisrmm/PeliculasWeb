import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from "bootstrap";
import { ApiService } from '../../services/api/api.service'
declare var window: any;

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css']
})
export class HomeMoviesComponent implements OnInit {
  formModal: any;

  cards = [
    {
      imagen: 'assets/poster1.jpg',
      actor1: 'Pedero',
      actor2: 'Jose',
      actor3: 'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
      button: 'Ver más',
      toPage: 'admin/menu-config/tasa-interes',
    },
    {
      imagen: 'assets/poster1.jpg',
      actor1: 'Pedero',
      actor2: 'Jose',
      actor3: 'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
      button: 'Ver más',
      toPage: 'admin/menu-config/tipo-cambio',
    },
    {
      imagen: 'assets/poster1.jpg',
      actor1: 'Pedero',
      actor2: 'Jose',
      actor3: 'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
      button: 'Ver más',
      toPage: 'admin/menu-config/sing-in-admin',
    },
    {
      imagen: 'assets/poster1.jpg',
      actor1: 'Pedero',
      actor2: 'Jose',
      actor3: 'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
      button: 'Ver más',
      toPage: 'admin/menu-config/nivel-endeudamiento',
    },
    {
      imagen: 'assets/poster1.jpg',
      actor1: 'Pedero',
      actor2: 'Jose',
      actor3: 'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
      button: 'Ver más',
      toPage: 'admin/menu-config/automatizaion',
    },
  ];

  modal = [
    {
      imagen: 'assets/poster1.jpg',
      actor1: 'Pedero',
      actor2: 'Jose',
      actor3: 'Luis',
      description: 'lorem isuem',
      title: 'Doctor Strange',
      button: 'Ver más',
      toPage: 'admin/menu-config/tasa-interes',
    }
  ];

  moviesI!: any[];

  selectedMovie: any = {};

  testModal: Modal | undefined;

  currentItem = 'Television';

  constructor(
    public router: Router,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    this.getFiveMovies();
  }

  getFiveMovies() {
    let m = this.api.fiveMovies()
    m.subscribe(
      data => {
        this.moviesI = data;
        console.log(this.moviesI)
      }
    )
  }

  redirect(toPage: string) {

    this.router.navigate([toPage]);
  }
  openFormModal(itemCard: any) {
    this.selectedMovie = itemCard;
    console.log(this.selectedMovie);
    this.formModal.show();
  }

  closeFormModal() {
    this.formModal.hide();
  }

}
