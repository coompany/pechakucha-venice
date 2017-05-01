import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BackendService } from '../backend.service';
import { Email } from '../email';
import { EditionsService, Edition } from '../editions';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewChecked {

  edition: Edition;
  editionsLinks: { slug: string, name: string }[];
  emailStatus: { text: string, sent: boolean, model: Email };

  constructor(private backendService: BackendService,
              private editionsService: EditionsService,
              private route: ActivatedRoute) {
    this.restoreEmailStatus();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.edition = this.editionsService.get(params['edition']);
    });
    this.editionsLinks = this.editionsService.links;
  }

  ngAfterViewChecked() {
    let h = parseInt(
      window.getComputedStyle(document.querySelector('#timeline')).height);
    let lih = parseInt(
      window.getComputedStyle(document.querySelector('#timeline li:last-child')).height);
    let ss = <CSSStyleSheet>document.styleSheets[0];
    ss.insertRule(`#timeline::before { height: ${h-lih}px !important; }`, 0);
  }

  restoreEmailStatus(email: Email = new Email()) {
    this.emailStatus = {
      text: 'Invia la tua proposta',
      sent: false,
      model: email
    }
  }

  sendEmail() {
    this.emailStatus.text = 'Inviando...';

    const delay = 3000;
    let obs = this.backendService.sendEmail(this.emailStatus.model);

    obs.subscribe(() => {
      this.emailStatus.text = 'Iscrizione inviata con successo';
      this.emailStatus.sent = true;
      window.setTimeout(() => { this.restoreEmailStatus() }, delay);
    }, err => {
      this.emailStatus.text = 'Errore di invio. Riprova';
      this.emailStatus.sent = true;
      console.error(err);
      window.setTimeout(() => {
        this.restoreEmailStatus(this.emailStatus.model)
      }, delay);
    });
  }

}
