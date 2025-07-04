import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
      const existsIndex: number = state.products.findIndex(
        (product) => product.productName == action.payload.productName
      );

      // If the product name exists, then just update the quantity of that specific product
      if (existsIndex !== -1) {
        state.products[existsIndex].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      // Update total
      state.total += action.payload.price * action.payload.quantity;
    },
    // TODO - Remove items from cart.
  },
});

export const { addProductsToCart } = cartSlice.actions;
export default cartSlice.reducer;
