// describes the data in the application
// in a real project, there will usually be a
// lot of classes to fully describe the data that the application operates on.
export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public price?: number
  ) {}
}
