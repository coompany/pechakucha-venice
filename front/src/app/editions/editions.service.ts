import { Injectable, Inject } from '@angular/core';
import { Edition } from './edition';
import { EDITIONS } from './editions';


@Injectable()
export class EditionsService {

  constructor(@Inject(EDITIONS) private editions: { [name: string]: Edition }) { }

  public get(name: string): Edition | null {
    const edition = this.editions[name];
    return edition instanceof Edition ? edition : null;
  }

  public get availableEditions(): string[] {
    return Object.keys(this.editions);
  }

  public get links(): { slug: string, name: string }[] {
    let arr = [];
    for (let k of this.availableEditions) {
      arr.push({
        slug: k,
        name: this.editions[k].name
      });
    }
    return arr;
  }

}
