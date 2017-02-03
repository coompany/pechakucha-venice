export class Email {
  constructor(public name:    string = '',
              public surname: string = '',
              public address: string = '',
              public message: string = '') {}

  get toJSON(): {} {
    return {
      name: this.name,
      surname: this.surname,
      address: this.address,
      message: this.message
    }
  }
}
