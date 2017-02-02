import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mapClickUrl = 'https://maps.google.com/?q=Palazzo%20Michiel%20Strada%20Nuova,%204391%20Campo%20Santi%20Apostoli%20Venezia';
  staticMapUrl = 'https://maps.googleapis.com/maps/api/staticmap'+
          '?center=Palazzo%20Michiel%20Strada%20Nuova,%204391%20Campo%20Santi%20Apostoli%20Venezia' +
          '&zoom=16' +
          '&size=600x600' +
          '&maptype=roadmap' +
          '&markers=color:red%7CPalazzo%20Michiel%20Strada%20Nuova,%204391%20Campo%20Santi%20Apostoli%20Venezia' +
          '&key=AIzaSyDOtyBGM1ArybPLKhVIcBZzL_TKy2DWNxQ';

}
