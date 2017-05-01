import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeEdition: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const firstChildInterval = setInterval(() => {
      if (this.route.firstChild) {
        clearInterval(firstChildInterval);
        this.route.firstChild.params.subscribe(params => {
          this.activeEdition = params['edition'];
        });
      }
    }, 100);
  }

}
