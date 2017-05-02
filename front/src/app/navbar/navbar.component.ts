import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Edition, EditionsService } from '../editions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeEdition: string;
  public edition: Edition;

  constructor(private route: ActivatedRoute,
              private editionsService: EditionsService) { }

  ngOnInit() {
    const firstChildInterval = setInterval(() => {
      if (this.route.firstChild) {
        clearInterval(firstChildInterval);
        this.route.firstChild.params.subscribe(params => {
          this.activeEdition = params['edition'];
          this.edition = this.editionsService.get(this.activeEdition);
        });
      }
    }, 100);
  }

}
