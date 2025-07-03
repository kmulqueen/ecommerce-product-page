import { configureStore } from "@reduxjs/toolkit";
import type { Action } from "@reduxjs/toolkit";

interface Product {
  productName: string;
  quantity: number;
}

interface ShoppingCartState {
  products: Product[];
  total: number;
}

function shoppingCartReducer(
  state: ShoppingCartState = { products: [], total: 0 },
  action: Action
) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
