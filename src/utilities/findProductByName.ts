import type { Product } from "../features/cart/cartSlice";

export function existsIndex(
  productList: Product[],
  productName: string
): number {
  return productList.findIndex((product) => product.productName == productName);
}
