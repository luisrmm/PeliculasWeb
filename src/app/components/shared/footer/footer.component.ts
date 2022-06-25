import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  //Get current year
  get currentYear(): number
  {
      return new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
