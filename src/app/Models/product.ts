import { Category } from "./category";

export class Product {
  productId: number;

  productName: string;

  price: number;

  productDetails: string;

  processingFee: number;

  dateAdded: Date;

  productImgUrl: string;

  category:Category;

  inStock:boolean;
}
