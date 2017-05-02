import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EditionsService, Edition } from '../editions';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewChecked {

  editionParam: string;
  edition: Edition;
  editionsLinks: { slug: string, name: string }[];

  constructor(private editionsService: EditionsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.editionParam = params['edition'];
      this.edition = this.editionsService.get(this.editionParam);
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

}
