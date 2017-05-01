export enum HeaderType {
  Normal,
  DragDrop
}


export class Edition {

  constructor(public name: string,
              public isLatest: boolean,
              public headerType: HeaderType,
              public about: { subtitle: string, content: string },
              public timeTable: { date: string, name: string }[],
              public location: { mapUrl: string, staticImg: string, content: string },
              public sponsor: { img: string, link: string }[]) { }

}
