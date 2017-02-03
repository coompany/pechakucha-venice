import { Component, OnInit } from '@angular/core';

import { BackendService } from './backend.service';
import { Email } from './email';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mapClickUrl = 'https://maps.google.com/?q=Palazzo%20Michiel%20Strada%20Nuova,%204391%20Campo%20Santi%20Apostoli%20Venezia';
  staticMapUrl = 'https://maps.googleapis.com/maps/api/staticmap'+
          '?center=Palazzo%20Michiel%20Strada%20Nuova,%204391%20Campo%20Santi%20Apostoli%20Venezia' +
          '&zoom=16' +
          '&size=600x600' +
          '&maptype=roadmap' +
          '&markers=color:red%7CPalazzo%20Michiel%20Strada%20Nuova,%204391%20Campo%20Santi%20Apostoli%20Venezia' +
          '&key=AIzaSyDOtyBGM1ArybPLKhVIcBZzL_TKy2DWNxQ';
  emailStatus: { text: string, sent: boolean, model: Email };


  constructor(private backendService: BackendService) {
    this.restoreEmailStatus();
  }

  ngOnInit() {
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
