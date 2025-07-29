import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import pictureReducer from "../features/picture/pictureSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    picture: pictureReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
