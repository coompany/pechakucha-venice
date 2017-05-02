import { Component, Input, ElementRef, OnChanges, AfterViewChecked } from '@angular/core';
import { Edition, NormalHeader } from '../editions';
declare var $: any;


type Vector2D<T> = { x: T, y: T };


@Component({
  selector: 'app-header',
  template: `
    <div class="full-width">
      <img *ngIf="isNormal" [src]="edition.header.img" class="img-fluid" />
      <div *ngIf="!isNormal" id="draggable"
            [style.background-image]="wrapInUrl(edition.header.backgroundImg)"
            [style.background-position-x]="bgPosition.x"
            [style.background-position-y]="bgPosition.y">
        <img [src]="edition.header.frontImg" class="img-fluid" />
      </div>
    </div>
  `,
  styles: [`
    #draggable {
      background-size: 160%;
    }
  `]
})
export class HeaderComponent implements OnChanges, AfterViewChecked {

  @Input() edition: Edition;
  private loadIt: boolean;
  private draggable: HTMLElement;
  public bgPosition: Vector2D<string> = { x: '50%', y: '50%' };

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    this.loadIt = true;
  }

  ngAfterViewChecked() {
    if (!this.isNormal && this.loadIt) {
      this.draggable = this.element.nativeElement.querySelector('#draggable');
      $(this.draggable).on('mousedown touchstart', evt => {
        this.onMouseDown(evt);
      });
      this.loadIt = false;
    }
  }

  private onMouseDown(evt) {
    evt.preventDefault();
    const mousedown: Vector2D<number> = {
      x: evt.originalEvent.pageX || evt.originalEvent.touches[0].pageX,
      y: evt.originalEvent.pageY || evt.originalEvent.touches[0].pageY
    };
    const elepos: Vector2D<number> = {
      x: parseFloat(this.draggable.style['background-position'].split(' ')[0].replace('%','')),
      y: parseFloat(this.draggable.style['background-position'].split(' ')[1].replace('%',''))
    };

    $(document).on('mouseup touchend', evt => {
      $(document).unbind('mousemove touchmove')
    });

    $(document).on('mousemove touchmove', evt => {
      const mousepos: Vector2D<number> = {
        x: evt.originalEvent.pageX || evt.originalEvent.changedTouches[0].pageX || mousedown.x,
        y: evt.originalEvent.pageY || evt.originalEvent.changedTouches[0].pageY || mousedown.y
      };

      if (mousedown != mousepos) {
        const movePercentage: Vector2D<number> = {
          x: ( 100 * (mousepos.x - mousedown.x)) / window.innerWidth,
          y: ( 100 * (mousepos.y - mousedown.y)) / 560
        };
        const actualMovePercentage: Vector2D<number> = {
          x: (( (0.7 / ( 1 - (160 / 100) )) * movePercentage.x ) ),
          y: (( (0.7 / ( 1 - (160 / 100) )) * movePercentage.y ) )
        };

        let xpos = elepos.x + actualMovePercentage.x;
        if (xpos > 100)
          xpos = 100;
        else if (xpos < 0)
          xpos = 0;

        let ypos = elepos.y + actualMovePercentage.y;
        if (ypos > 100)
          ypos = 100;
        else if (ypos < 0)
          ypos = 0;

        this.bgPosition = {
          x: `${xpos}%`,
          y: `${ypos}%`
        };
      }
    });
  }

  get isNormal(): boolean {
    return this.edition.header instanceof NormalHeader;
  }

  wrapInUrl(url: string): string {
    return `url(${url})`;
  }

}
