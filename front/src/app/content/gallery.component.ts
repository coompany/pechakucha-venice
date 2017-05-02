import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
declare const $: any;


@Component({
  selector: 'app-gallery',
  template: `
    <div class="row">
      <div class="col-sm-8">
        <h1 class="h1 filetto1">Evento</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2">
        <div class="carousel slide" id="gallery-carousel">
          <div class="carousel-inner" role="listbox">
            <div *ngFor="let img of images; let i = index"
                  class="carousel-item align-items-center" [class.active]="i === 0">
              <img class="d-block img-fluid" [src]="img" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#gallery-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#gallery-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  `
})
export class GalleryComponent implements AfterViewInit {

  @Input() images: string[];

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    $(this.element.nativeElement).find('.carousel').carousel();
  }

}
