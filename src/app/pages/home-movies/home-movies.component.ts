import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from "bootstrap";
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ApiService } from '../../services/api/api.service'
declare var window: any;

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css']
})
export class HomeMoviesComponent implements OnInit {
  formModal: any;
  moviesI: any[] = [];
  message: string = '';
  selectedMovie: any = {};
  testModal: Modal | undefined;
  nameMovie = '';
  loading = true;

  public messageAObservable!: Observable<string>;

  constructor(
    public router: Router,
    private api: ApiService,
    private helper: HelperService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    this.getFiveMovies();
    this.helper.getMessageAObservable().subscribe(movie =>{
      this.getSearchMovies(movie);
    }
    )
    //this.helper.customMessage.subscribe(msg => this.message = msg);
    //this.messageAObservable = this.helper.getMessageAObservable();
  }

  getFiveMovies() {
    let m = this.api.fiveMovies()
    m.subscribe(
      data => {
        this.moviesI = data;
        this.loading = false;
      }
    )
  }

  getSearchMovies(nameMovie: any){
    this.nameMovie = nameMovie;
    let m = this.api.searchMovies(nameMovie)
    m.subscribe(
      data => {
        this.moviesI = data;
        this.loading = false;
      }
    )
  }

  redirect(toPage: string) {

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([toPage]);
    });
    //this.router.navigate([toPage]);
  }
  openFormModal(itemCard: any) {
    this.selectedMovie = itemCard;
    this.formModal.show();
  }

  closeFormModal() {
    this.formModal.hide();
  }

}
