import { Component, OnInit } from '@angular/core';

import { BackendService } from '../backend.service';
import { Email } from '../email';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  emailStatus: { text: string, sent: boolean, model: Email };

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.restoreEmailStatus();
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
