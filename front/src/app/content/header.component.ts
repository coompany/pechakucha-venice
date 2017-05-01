import { Component, Input, ElementRef, AfterViewChecked } from '@angular/core';
import { Edition, NormalHeader } from '../editions';


@Component({
  selector: 'app-header',
  template: `
    <div class="full-width">
      <img *ngIf="isNormal" [src]="edition.header.img" class="img-fluid" />
      <div *ngIf="!isNormal" id="draggable"
            [style.background-image]="wrapInUrl(edition.header.backgroundImg)">
        <img [src]="edition.header.frontImg" class="img-fluid" />
      </div>
    </div>
  `,
  styles: [`
    #draggable {
      background-size: 160%;
      background-position: 50%;
    }
  `]
})
export class HeaderComponent implements AfterViewChecked {

  @Input() edition: Edition;
  private loadedOnce: boolean = false;
  private draggable: HTMLElement;

  constructor(private element: ElementRef) { }

  ngAfterViewChecked() {
    if (!this.loadedOnce) {
      this.draggable = this.element.nativeElement.querySelector('#draggable');
      this.loadedOnce = true;
    }
  }

  get isNormal(): boolean {
    return this.edition.header instanceof NormalHeader;
  }

  wrapInUrl(url: string): string {
    return `url(${url})`;
  }

}
