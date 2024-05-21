// 1. Create an interface representing a document in MongoDB.

export type Order = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};
