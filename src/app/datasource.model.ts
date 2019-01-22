import { Product } from "./product.model";

// data source provides the application with the data
// the most common type of data source uses HTTP to request data from a web service

// to start you can use something simple, static to provide application data

export class SimpleDataSource {
  private data: Product[];

  constructor() {
    this.data = new Array<Product>(
      new Product(1, "Kayak", "Watersports", 275),
      new Product(2, "Lifejacket", "Watersports", 48.95),
      new Product(3, "Soccer Ball", "Soccer", 19.5),
      new Product(4, "Corner Flags", "Soccer", 34.95),
      new Product(5, "Thinking Cap", "Chess", 16)
    );
  }

  getData(): Product[] {
    return this.data;
  }
}
