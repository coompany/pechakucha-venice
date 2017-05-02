import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-footer',
  template: `
    <footer class="home-section">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div id="social-links">
              Condividi su<br />
              <ul class="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/sharer/sharer.php?u={{ url }}&amp;src=sdkpreparse"
                     (click)="openSocial($event)">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/intent/tweet?text=PechaKucha%20Venezia&url={{ url }}">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://plus.google.com/share?url={{ url }}" (click)="openSocial($event)">
                    Google+
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6 text-right align-self-end">
            <p>Copyright &copy; PechaKucha Venezia 2017</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      font-size: 14px;
    }

    #social-links a {
      cursor: pointer;
    }

    #social-links a:hover {
      text-decoration: none;
    }
  `]
})
export class FooterComponent {

  @Input() edition: string;

  constructor(private router: Router, private location: Location) { }

  openSocial(evt: Event): boolean {
    const target = evt.target as HTMLAnchorElement
    window.open(target.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
  }

  get url(): string {
    const path = this.router.createUrlTree(['/', this.edition]).toString();
    return encodeURIComponent(document.location.protocol + '//' + document.location.host + path);
  }

}
