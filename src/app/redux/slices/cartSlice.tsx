import { createSlice } from "@reduxjs/toolkit";

export interface ICart {
  id: string;
  name: string;
  price: number;
  image: string;
  color?: string | null;
  size?: string | null;
  quantity: number;
}

interface CartState {
  cartItems: ICart[];
  totalAmount: number;
  totalItems: number;
}

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem) {
        productItem.quantity += 1;
      } else {
        state.cartItems = [item, ...state.cartItems];
      }
      // Update totalAmount and totalItems
      state.totalAmount = state.cartItems.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      );

      state.totalItems = state.cartItems.reduce(
        (accumulator, item) => accumulator + item.quantity,
        0
      );
    },
    incrementQ(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem) {
        productItem.quantity += 1;
      }
    },
    decrementQ(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem) {
        productItem.quantity -= 1;
        if (productItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
      }
    },
    removeFromCart(state, action) {
      const item = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== item.id
      );
    },
  },
});

export const { addToCart, incrementQ, decrementQ, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
