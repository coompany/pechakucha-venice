import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare const $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        const $window = $(window);
        if (tree.fragment) {
          const element = document.querySelector(`#${tree.fragment}`);
          if (element) {
            $window.scrollTop($window.scrollTop() + element.getBoundingClientRect().top - 60);
          }
        } else {
          $window.scrollTop(0);
        }
      }
    });
  }

  ngOnInit() { }

}
