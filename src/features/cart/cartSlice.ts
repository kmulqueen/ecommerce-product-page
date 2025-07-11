import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { existsIndex } from "../../utilities/findProductByName";

export interface Product {
  productName: string;
  quantity: number;
  price: number;
}

export interface Cart {
  products: Product[];
  total: number;
}

const initialState: Cart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductsToCart(state, action: PayloadAction<Product>) {
      // Check state.products for product name.
      const productExists: number = existsIndex(
        state.products,
        action.payload.productName
      );

      // If the product name exists, then just update the quantity of that specific product
      if (productExists !== -1) {
        state.products[productExists].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      // Update total
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProductsFromCart(state, action: PayloadAction<Product>) {
      // Check state.products for product name.
      const productExists: number = existsIndex(
        state.products,
        action.payload.productName
      );

      // If the product name exists, update cart total and remove whole quantity of items from cart.
      if (productExists !== -1) {
        // Update total
        state.total =
          state.total -
          state.products[productExists].price *
            state.products[productExists].quantity;

        // Remove product from cart
        state.products.splice(productExists, 1);
      }
    },
  },
});

export const { addProductsToCart, removeProductsFromCart } = cartSlice.actions;
export default cartSlice.reducer;
