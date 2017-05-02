export interface Header { }

export class NormalHeader implements Header {
  constructor(public img: string) { }
}

export class DraggableHeader implements Header {
  constructor(public backgroundImg: string,
              public frontImg: string) { }
}


export class Edition {

  constructor(public name: string,
              public isLatest: boolean,
              public header: Header,
              public about: { subtitle: string, content: string },
              public timeTable: { date: string, name: string }[],
              public location: { mapUrl: string, staticImg: string, content: string },
              public sponsor: { img: string, link: string }[],
              public gallery?: string[]) { }

}
