export class InvalidMaxError extends Error {
  constructor(message: string, public value: number) {
    super(message);
    this.name = this.constructor.name;
  }
}
