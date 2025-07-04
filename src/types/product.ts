export type Product = {
  name: string;
  productPrice: number;
  quantity: number;
};

export type ProductFull = {
  description: string;
  company: string;
  originalPrice: number;
  discount: string;
} & Omit<Product, "quantity">;
