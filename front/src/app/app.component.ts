import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


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
        if (tree.fragment) {
          const element = document.querySelector(`#${tree.fragment}`);
          if (element) {
            document.body.scrollTop += element.getBoundingClientRect().top - 60;
          }
        } else {
          document.body.scrollTop = 0;
        }
      }
    });
  }

  ngOnInit() { }

}
